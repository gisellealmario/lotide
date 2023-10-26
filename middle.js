
// This function checks if two arrays are equal
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

// This function checks if two arrays are equal and logs the appropriate message
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// ACTUAL FUNCTION

// This function returns the middle element(s) of an array
const middle = function(array) {
  const length = array.length; // Get the length of the array
  // Check for various scenarios based on the length of the array
  if (length <= 2) {
    return []; // If the array has 0, 1, or 2 elements, return an empty array
  } else if (length % 2 === 1) {
    const middleIndex = Math.floor(length / 2); // Calculate the index of the middle element for an odd-length array
    return [array[middleIndex]]; // Return an array containing the middle element
  } else {
    const middleIndex = length / 2 - 1; // Calculate the index of the first middle element for an even-length array
    return [array[middleIndex], array[middleIndex + 1]]; // Return an array containing the two middle elements
  }
};
module.exports = eqArrays;
module.exports = assertArraysEqual;
module.exports = middle
// TEST CODE

// Test cases for various scenarios
assertArraysEqual(middle([1]), []); // Test for an array with 1 element
assertArraysEqual(middle([1, 2]), []); // Test for an array with 2 elements
assertArraysEqual(middle([1, 2, 3]), [2]); // Test for an array with 3 elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Test for an array with 5 elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Test for an array with 4 elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Test for an array with 6 elements
assertArraysEqual(middle([2, 2, 4]), [2]);