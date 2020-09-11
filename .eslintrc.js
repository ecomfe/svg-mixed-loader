module.exports = {
    extends: [
        '@ecomfe/eslint-config/strict',
    ],
    plugins: [
        'jest',
    ],
    env: {
        'jest/globals': true,
    },
    ignorePatterns: [
        '**/output/*',
    ],
};
