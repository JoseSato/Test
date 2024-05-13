const sum = require ('./sum');

test ('Test sum function', () => {
    expect(sum(3, 2)).toBe(5);    
});
