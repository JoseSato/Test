const sum = require ('./sum');

test ('Test sum function', () => {
    expect(sum(3, 1)).toBe(5);    
});
