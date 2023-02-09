const repeatString = function(strings, num) {
    let input = ""
    if (num < 0) {return "ERROR"}
    else { 
        for (i = 0; i < num; i++){
        input += strings}
    return input
    }
};

// Do not edit below this line
module.exports = repeatString;
