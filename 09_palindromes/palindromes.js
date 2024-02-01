const palindromes = function () {
    var input = arguments[0];
    input = input.toLowerCase();
    const alpha = [];
    const alphabet = "abcdefghijklmnopqrsrtuvwxyz0123456789";
    for (var i=0; i<36; i++) {
        alpha.push(alphabet.charAt(i));
    }
    var newString = "";
    for (var i=0; i<input.length; i++) {
        for (var j=0; j<36; j++) {
            if (input[i]==alpha[j]) {
                newString += input[i];
            }
        }
    }
    for (var i=0; i<(newString.length-1)/2; i++) {
        if (newString.charAt(i)!=newString.charAt(newString.length-1-i)){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
