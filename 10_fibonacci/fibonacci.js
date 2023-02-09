
const fibonacci = function(num) {
    let n1 = 0, n2 = 1, nextTerm;
    
    for (let i = 1; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1

    // if (num < 0){return "OOPS"};
    // if (num === 0){return 0};
    // let numA = 0
    // let numB = 1
    // let numFibo;
    // for(let i = 1; i < num; i++){
    //     numFibo = numB
    //     numB = numFibo;
    //     numA = numB;
    // }
    // return numFibo;

};

// Do not edit below this line
module.exports = fibonacci;
