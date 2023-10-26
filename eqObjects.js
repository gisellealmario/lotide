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

// Function to check equality and display a message accordingly
const assertEqual = function(actual, expected) {
  // Check if the actual value is equal to the expected value
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`); // Log a passing message if they are equal
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`); // Log a failure message if they are not equal
  }
};

// Function to check the equality of objects
const eqObjects = function (object1, object2) {
  // Obtain the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false; // If the number of keys is different, the objects are not equal
  }

  // Iterate through the keys of object1
  for (const key of keys1) {
    // Check if the values of each key in object1 match the corresponding values in object2
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false; // If arrays are not equal, the objects are not equal
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false; // If any values are different, the objects are not equal
      }
    }
  }
  return true; // If no differences are found, the objects are equal
};

// Test objects
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// Logs the result of the equality check between shirtObject and anotherShirtObject
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// Logs the result of the equality check between shirtObject and longSleeveShirtObject
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

// Tests the eqObjects function using assertEqual
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), true);

module.exports = eqObjects;