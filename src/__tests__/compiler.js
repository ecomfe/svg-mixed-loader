const path = require('path');
const webpack = require('webpack');

module.exports = (options = {}) => {
    const compiler = webpack({
        mode: 'development',
        context: __dirname,
        entry: './fixtures/icon-test.svg',
        output: {
            path: path.join(__dirname, 'output'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: {
                        loader: require.resolve('../index'),
                        options,
                    },
                },
            ],
        },
        externals: {
            react: 'React',
        },
        optimization: {
            splitChunks: false,
        },
    });

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
                return;
            }

            const output = stats.toJson({source: true, errors: true});
            if (stats.hasErrors()) {
                const error = output.errors[0];
                reject(new Error(error.message || error));
            }
            else {
                const result = {
                    code: output.modules[0].source,
                    assets: output.assets,
                };
                resolve(result);
            }
        });
    });
};
