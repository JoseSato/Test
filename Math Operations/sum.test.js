const sum = require ('./sum');

test ('Test sum function', () => {
    expect(sum(1, 2)).toBe(3);    
});