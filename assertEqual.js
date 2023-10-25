const errorMsg = "👎👎👎";
const passed = "👍👍👍";

const assertEqual = function(actual, expected) { 
  console.assert(actual === expected, `${errorMsg} Assertion failed: Expected ${expected}, but got ${actual}`);
  if (actual === expected) {
    console.log(`${passed} Assertion passed: Expected ${expected} and got ${actual}`);
  }
};


// Test the function
assertEqual(1, 1);

module.exports = assertEqual;