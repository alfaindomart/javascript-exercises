const ftoc = function(farenht) {
  let tempC = (farenht - 32) * 5/9;
  return parseFloat(tempC.toFixed(1));
};

const ctof = function(celc) {
  let tempF = celc * (9/5) + 32;
  return parseFloat(tempF.toFixed(1)) 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
