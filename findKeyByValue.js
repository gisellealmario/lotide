// This function checks if the actual and expected values are equal and logs the appropriate message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// This function takes in an object and a value, and searches for the first key that contains the given value
const findKeyByValue = function (object, value) {
  // Iterate through each key in the object
  for (const key in object) {
    // If the value of the current key is equal to the given value, return the key
    if (object[key] === value) {
      return key; // Return the key if the value is found
    }
  }
  return undefined; // If the value is not found, return undefined
};

// Example object for testing the findKeyByValue function
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Testing the findKeyByValue function with the assertEqual function
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // Test with an existing value
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // Test with a non-existing value
