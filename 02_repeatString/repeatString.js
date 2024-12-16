const repeatString = function(string, num) {
  if (num < 0) return 'ERROR';

  let repeatedString = '';

  for(; num > 0; num--) {
    repeatedString += string;
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
