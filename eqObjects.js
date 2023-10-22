// This function checks if the actual and expected values are equal and logs the appropriate message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match. */
const eqObjects = function (object1, object2) {
  // Compare the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false; // If the number of keys is different, the objects are not equal
  }

  // Iterate through the keys of object1
  for (const key of keys1) {
    // Check if the values of each key in object1 match the corresponding values in object2
    if (object1[key] !== object2[key]) {
      return false; // If any values are different, the objects are not equal
    }
  }
  return true; // If no differences are found, the objects are equal
};

// Test objects
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

// Tests for eqObjects function
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

// Assertion tests for eqObjects function
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
