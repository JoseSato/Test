const subtract = require ('./subtract');

test ('Test subtract funcion', () =>{
    expect(subtract(5,3)).toBe(2);
});

test ('Test subtract funcion with negative value result', () => {
    expect(subtract(1,4)).toBe (-3);
});