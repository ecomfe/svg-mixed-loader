const compiler = require('./compiler');

test('invalid options', async () => {
    await expect(compiler({foo: 'bar'})).rejects.toThrow();
});
