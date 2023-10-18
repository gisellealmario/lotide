// Define the head function
function head(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}

// Define the assertEqual function
function assertEqual(actual, expected) {
  console.assert(actual === expected,`${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
}

// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["hi", "Lighthouse", "Labs"]), "Hello"); // Should pass
assertEqual(head([5]), 5); // Should pass
assertEqual(head([]), undefined); // Should pass
