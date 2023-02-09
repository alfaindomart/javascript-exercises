//take words
//change it into array
//arrange words into sdrow
//put sdrow into variable
//compare words to sdrow

const palindromes = function (words) {
    words = words.toLowerCase().replace(/[^a-z0-9]+/g, '')
    let sdrow = words.split('').reverse().join('')
    return sdrow === words
};

// Do not edit below this line
module.exports = palindromes;
