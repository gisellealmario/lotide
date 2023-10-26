const eqArrays = function(actual, expected) { 
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;

    }
    
  } 
  return true;
  
};

const assertEqual = require('./assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);


module.exports = eqArrays;
module.exports = assertEqual;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
