const removeFromArray = function(arrays, ...removed) {
    let converted = [...arrays];
    for (i = 0; i < removed.length; i++) {
        if (converted.includes(removed[i])){
            converted.splice(converted.indexOf(removed[i]), 1)
        }
    }
    return converted;
};

// Do not edit below this line
module.exports = removeFromArray;
