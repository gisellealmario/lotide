const errorMsg = "👎👎👎";
const passed = "👍👍👍";

const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${errorMsg} Assertion failed: Expected ${expected}, but got ${actual}`);
  if (actual === expected) {
    console.log(`${passed} Assertion passed: Expected ${expected} and got ${actual}`);
  }
};


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
