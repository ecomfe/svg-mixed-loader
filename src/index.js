const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const schema = require('./schema');
const toReactCode = require('./react');
const toURLCode = require('./url');

const generators = [toURLCode, toReactCode];

module.exports = async function svgMixedLoader(source) {
    /* istanbul ignore next */
    const options = loaderUtils.getOptions(this) || {url: true, react: false};

    validateOptions(schema, options, {name: 'svg-mixed-loader', baseDataPath: 'options'});

    const parts = await Promise.all(generators.map(g => g(this, source, options)));
    const {imports, body} = parts.reduce(
        (output, {imports, body}) => {
            output.imports.push(...imports);
            output.body.push(...body);
            return output;
        },
        {imports: [], body: []}
    );
    return imports.join('\n') + '\n' + body.join('\n');
};
