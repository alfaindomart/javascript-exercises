//to sum from 1 to 5, loop from 1 to 2 to 3 to 4 to 5
//then sum
//function take the parameter number from > 0 to > 0 and from > 0 to > 0
//it loop based on the number set on parameter
//
const sumAll = function(numOne, numTwo) {
    let finalSum = 0;
    if (numOne < 0||numTwo < 0||typeof numOne != "number"||typeof numTwo != "number"){return "ERROR"}
    else if (numOne < numTwo) {for ((i = numOne); (i <= numTwo); (i++))
        {finalSum += i}}
    else if (numOne > numTwo) {for ((i = numTwo); (i <= numOne); (i++))
        {finalSum += i}}

    return finalSum;
}

// Do not edit below this line
module.exports = sumAll;
