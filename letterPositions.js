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

// Function to get the positions of each letter in a string
const letterPositions = function(sentence) {
  const results = {};
  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    // If the current character is not a space, update the positions accordingly
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results; // Return the object containing the letter positions
};

// Example usage with the string 'hello'
const results = letterPositions('hello');
console.log(results);

// Test to check the positions of 'e' in the string 'hello'
assertArraysEqual(letterPositions("hello").e, [1]);
