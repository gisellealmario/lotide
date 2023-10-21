/* const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${errorMsg} Assertion failed: Expected ${expected}, but got ${actual}`);
  if (actual === expected) {
    console.log(`${passed} Assertion passed: Expected ${expected} and got ${actual}`);
  }
}; */


/* ============ FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); 
*/

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

console.log (eqArrays(["1", "2", "3"], ["1", "2", 3]))


