function exponent (a, b){
    
    var r = a;
    
    for(var i = 1; i < b; i++){
        r *= a;
    }

    return r;
}

module.exports = exponent;