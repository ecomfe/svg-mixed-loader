const urlLoader = require('url-loader');
const normalizeOptions = require('./normalizeOptions');

module.exports = async (loaderContext, source, options) => {
    const urlOptions = normalizeOptions(options.url, true, {});

    if (!urlOptions) {
        return {
            imports: [],
            body: [],
        };
    }

    const urlLoaderContext = Object.assign(
        {},
        loaderContext,
        {
            query: options.url || {},
        }
    );
    const result = await urlLoader.call(urlLoaderContext, source);
    return {
        imports: [],
        body: [result],
    };
};
