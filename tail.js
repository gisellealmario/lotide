// Define the head function
const tail = function(array) {
  return array.slice(1);
  
};

// Define the assertArraysEqual function
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion pass : ${actual} === ${expected}`);
  }
  
};

// Test cases
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
const a = tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(a.length, 2); // original array should still have 3 elements!


