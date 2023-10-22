
// This function checks if two arrays are equal
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false; // If the lengths are different, the arrays are not equal
  }
  // Iterate through the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Check if each element in the arrays is the same
    if (arr1[i] !== arr2[i]) {
      return false; // If any elements are different, the arrays are not equal
    }
  }
  return true; // If no differences are found, the arrays are equal
};

// This function checks if two arrays are equal and logs the appropriate message
const assertArraysEqual = function(actual, expected) {
  // Use the eqArrays function to check if the arrays are equal
  if (eqArrays(actual, expected)) {
    // If the arrays are equal, log a passing message
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // If the arrays are not equal, log a failure message
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// TEST CODE

// Test cases for various scenarios
assertArraysEqual(middle([1]), []); // Test for an array with 1 element
assertArraysEqual(middle([1, 2]), []); // Test for an array with 2 elements
assertArraysEqual(middle([1, 2, 3]), [2]); // Test for an array with 3 elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Test for an array with 5 elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Test for an array with 4 elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Test for an array with 6 elements
