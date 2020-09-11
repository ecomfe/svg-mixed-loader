# svg-mixed-loader

Webpack loader resolving svg into url string and multiple component formats.

## Background

In community svg files are commonly used to introduce icons to web apps, in this case developers are tend to import and svg as a component:

```jsx
import IconPlus from './icon-plus.svg';

const CreateButton = () => (
    <Button>
        <IconPlus />
        Create New
    </Button>
);
```

Also, svg, when itself is a common image format, may used as an image:

```jsx
import logoURL from './logo.svg';

const Header = () => (
    <div style={{display: 'flex'}}>
        <img width={180} height={30} src={logoURL} />
        <div style={{flex: 1}}>
            {/* navigation}*/}
        </div>
    </div>
);
```

As these use cases are conflicting to each other, this loader sovles this by export multiple possible formats from an svg file.

## Install

`svg-mixed-loader` requires url-loader and file-loader as peer dependencies.

```shell
npm install -D svg-mixed-loader url-loader file-loader
```

## Usage

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-mixed-loader',
                        options: {
                            // options
                        },
                    },
                    // You may add other preprocess loaders like svgo-loader or img-loader here
                ],
            },
        ],
    },
};
```

## Output

This loader currently create a default export of image URL, and a named export `ReactComponent` as a react component.

```js
import React from 'react';

export default 'data:image/svg;...';

export const ReactComponent = props => React.createElement(/* ... */);
ReactComponent.displayName = 'AutoResolvedComponentName';
```

## Options

```js
{
    // This option will be forwarded to url-loader, can set to false to disable generation of default export
    url: {
        limit: 1024,
    },
    // Can be:
    //
    // 1. true: generate react component as ReactComponent named export with default option
    // 2. false: don't generate react component
    // 3. object: customize react code generation, see below
    //
    // Default to false.
    react: {
        // Can be multiple formats:
        //
        // 1. true: auto resolve a component name from resource path
        // 2. false: remove display name from output
        // 3. string: a static display name
        // 4. function: customize display by (resourcePath) => string
        //
        // Default to true.
        displayName: true,
    }
}
```

By default `svg-mixed-loader` generates only default export, behaves exactly the same as `url-loader`,
if `ReactComponent` named export is wanted, pass `{react: true}` as options is a quick solution.
