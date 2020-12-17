module.exports = (options, defaultOptions) => {
    switch (options) {
        case true:
            return defaultOptions;
        case false:
            return false;
        default:
            return {...defaultOptions, ...options};
    }
};
