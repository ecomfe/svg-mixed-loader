const compiler = require('./compiler');

test('named export', async () => {
    const {code} = await compiler({react: true});
    expect(code.includes('export const ReactComponent')).toBe(true);
    expect(code.includes('React.createElement("svg"')).toBe(true);
});

test('auto display name', async () => {
    const {code} = await compiler({react: {displayName: true}});
    expect(code.includes('ReactComponent.displayName = "IconTest";')).toBe(true);
});

test('no display name', async () => {
    const {code} = await compiler({react: {displayName: false}});
    expect(code.includes('ReactComponent.displayName')).toBe(false);
});

test('static display name', async () => {
    const {code} = await compiler({react: {displayName: 'IconFoo'}});
    expect(code.includes('ReactComponent.displayName = "IconFoo";')).toBe(true);
});

test('function display name', async () => {
    const {code} = await compiler({react: {displayName: () => 'IconBar'}});
    expect(code.includes('ReactComponent.displayName = "IconBar";')).toBe(true);
});

test('disable', async () => {
    const {code} = await compiler({react: false});
    expect(code.includes('export const ReactComponent')).toBe(false);
});
