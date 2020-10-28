const path = require('path');
const babel = require('@babel/core');
const svgToJSX = require('svg-to-jsx');
const {pascalCase} = require('change-case');
const normalizeOptions = require('./normalizeOptions');

const babelOptions = {
    babelrc: false,
    configFile: false,
    presets: [
        require.resolve('@babel/preset-react'),
    ],
};

const resolveDisplayName = (filename, option) => {
    if (option === false) {
        return '';
    }
    if (typeof option === 'function') {
        return option(filename);
    }
    if (typeof option === 'string') {
        return option;
    }

    const base = path.basename(path.basename(filename), path.extname(filename));
    return pascalCase(base);
};

module.exports = async (loaderContext, source, options) => {
    const reactOptions = normalizeOptions(options.react, false, {displayName: true});

    if (!reactOptions) {
        return {
            imports: [],
            body: [],
        };
    }

    const jsx = await svgToJSX(source, {passProps: true}, null);
    const displayName = resolveDisplayName(loaderContext.resourcePath, reactOptions.displayName);
    const moduleSource = `export const ReactComponent = props => ${jsx.replace('{...this.props}', '{...props}')};`;
    return {
        imports: ['import React from "react";'],
        body: [
            babel.transform(moduleSource, babelOptions).code,
            displayName ? `ReactComponent.displayName = "${displayName}";` : '',
        ],
    };
};
