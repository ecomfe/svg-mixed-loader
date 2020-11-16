const compiler = require('./compiler');

test('default export', async () => {
    const {code} = await compiler();
    expect(code.includes('export const url = "')).toBe(true);
});

test('limit', async () => {
    const {assets} = await compiler({url: {limit: 10}});
    expect(assets.length).toBe(2);
    expect(assets.some(a => a.name.endsWith('.svg'))).toBe(true);
});

test('disable', async () => {
    const {code} = await compiler({url: false});
    expect(code.trim()).toBe('');
});
