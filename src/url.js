const urlLoader = require('url-loader');
const normalizeOptions = require('./normalizeOptions');

exports.exportedName = 'url';

exports.transform = async (loaderContext, source, options) => {
    const urlOptions = normalizeOptions(options.url, {});

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
            query: {
                ...options.url,
                // Must be true to ensure later replace works
                esModule: true,
            },
        }
    );
    const result = await urlLoader.call(urlLoaderContext, source);
    return {
        imports: [],
        body: [result.replace('export default ', 'export const url = ')],
    };
};
