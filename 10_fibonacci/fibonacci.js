const fibonacci = function() {
    var num = arguments[0];
    if (typeof num == "string") {
        num = parseInt(num);
    }
    if (num < 0) {
        return "OOPS";
    }
    fib = [0, 1];
    for (var i=2; i<=num; i++) {
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
