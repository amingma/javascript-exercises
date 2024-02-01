const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
  return arguments[0]-arguments[1];
};

const sum = function() {
	var ret = 0;
  for (var i=0; i<arguments[0].length; i++) {
    ret += arguments[0][i];
  }
  return ret;
};

const multiply = function() {
  var ret = 1;
  for (var i=0; i<arguments[0].length; i++) {
    ret *= arguments[0][i];
  }
  return ret;
};

const power = function() {
	var ret = 1;
  for (var i=0; i<arguments[1]; i++) {
    ret *= arguments[0];
  }
  return ret;
};

const factorial = function() {
	var ret = 1;
  for (var i=1; i<=arguments[0]; i++) {
    ret *= i;
  }
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
