const add = function(numOne, numTwo) {
  let addResult = numOne + numTwo
  return addResult;
};

const subtract = function(numOne, numTwo) {
  let substractResult = numOne - numTwo
  return substractResult;

};

const sum = function(num) {
  const sumArray = num.reduce((total, num) => total + num, 0);
  return sumArray;
};

const multiply = function(multNum) {
  const multArray = multNum.reduce((total, multNum) => total * multNum)
  return multArray;

};

const power = function(number, power) {
  return number ** power;
	
};

const factorial = function(facNum) {
  let factorNum = 1
  for (i = facNum; i > 0; i--){
    factorNum *= i
  }
  return factorNum;
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
