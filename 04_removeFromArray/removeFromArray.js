const removeFromArray = function() {
    let arr = arguments[0];
    let ret = [];
    for (let i=0; i<arr.length; i++) {
        let add = true;
        for (let j=1; j<arguments.length; j++) {
            if (arr[i]===arguments[j]) {
                add = false;
            }
        }
        if (add) {
            ret.push(arr[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
