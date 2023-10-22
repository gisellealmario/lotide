const eqArrays = function(actual, expected) {
  // Check if the arrays have different lengths
  if (actual.length !== expected.length) {
    return false; // If the lengths are different, the arrays are not equal
  }
  // Iterate through the elements of the arrays
  for (let i = 0; i < actual.length; i++) {
    // Check if each element in the arrays is the same
    if (actual[i] !== expected[i]) {
      return false; // If any elements are different, the arrays are not equal
    }
  }
  return true; // If no differences are found, the arrays are equal
};

// Import the inspect function from the util library
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  // Define the eqObjects function to compare two objects
  const eqObjects = function (object1, object2) {
    const keys1 = Object.keys(object1); // Get the keys of the first object
    const keys2 = Object.keys(object2); // Get the keys of the second object

    // Check if the number of keys in the objects is the same
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Iterate through the keys of the first object
    for (const key of keys1) {
      // Check if the values of the current keys are arrays and use eqArrays to compare them
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        // If the values are not arrays, use strict equality to compare them
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true; // If no differences are found, the objects are considered equal
  };

  // Check if the objects are equal and log an appropriate message
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Example usage of the assertObjectsEqual function
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
