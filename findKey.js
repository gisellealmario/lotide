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

// Function to log whether two arrays are equal or not
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//Instruction
//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

// The findKey function takes in an object and a callback function as parameters

const findKey = function(object, callback) {
  // Iterate through the keys of the object using a for...in loop
  for (const key in object) {
    // Check if the callback returns a truthy value for the current key's value
    if (callback(object[key])) {
      // If the callback returns true, return the current key
      return key;
    }
  }
  // If no key is found that satisfies the callback, return undefined
  return undefined;
};

// Example usage of the findKey function with a sample data object
const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// Calling the findKey function with the data object and a callback to find a key with stars equal to 2
const result = findKey(data, x => x.stars === 2);
console.log(result); 

assertArraysEqual(result, 'noma')