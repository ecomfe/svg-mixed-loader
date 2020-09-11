module.exports = (options, defaultValue, defaultOptions) => {
    const optionsValue = options === undefined ? defaultValue : options;

    switch (optionsValue) {
        case true:
            return defaultOptions;
        case false:
            return false;
        default:
            return {...defaultOptions, ...options};
    }
};
