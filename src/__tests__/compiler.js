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
    });

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
            }

            if (stats.hasErrors()) {
                reject(new Error(stats.toJson().errors));
            }

            const output = stats.toJson();
            const result = {
                code: output.modules[0].source,
                assets: output.assets,
            };
            resolve(result);
        });
    });
};
