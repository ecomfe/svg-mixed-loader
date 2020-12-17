const compiler = require('./compiler');

test('url', async () => {
    const {code} = await compiler({default: 'url'});
    expect(code.includes('export default url')).toBe(true);
});

test('react', async () => {
    const {code} = await compiler({react: true, default: 'react'});
    expect(code.includes('export default ReactComponent')).toBe(true);
});

test('disable', async () => {
    const {code} = await compiler({default: false});
    expect(code.includes('export default')).toBe(false);
});

test('invalid', () => {
    expect(compiler({default: 'unknown'})).rejects.toThrow();
});

test('unavailable', () => {
    expect(compiler({default: 'react'})).rejects.toThrow();
});

test('omit', async () => {
    const {code} = await compiler({});
    expect(code.includes('export default url')).toBe(true);
});
