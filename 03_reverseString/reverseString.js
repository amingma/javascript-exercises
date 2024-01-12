const reverseString = function(inputString) {
    let ret = "";
    for (let i=inputString.length-1; i>=0; i--) {
        ret += inputString.charAt(i);
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
