const sumAll = function(startNum, endNum) {
  if (startNum < 0 || endNum < 0 || !(Number.isInteger(startNum)) || !(Number.isInteger(endNum))) {
    return 'ERROR'
  } else {
    let sum = startNum;
    let i = startNum;
  
    if (startNum > endNum) {
      while(i > endNum) {
        sum += --i;
      }
    } else {
      while(i < endNum) {
        sum += ++i;
      }
    }
  
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
