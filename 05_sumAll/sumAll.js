const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }
    if (a<0 || b<0) {
        return "ERROR";
    }
    if (a<b) {
        return (b-a+1)*(a+b)/2;
    }
    return (a-b+1)*(a+b)/2;
};

// Do not edit below this line
module.exports = sumAll;
