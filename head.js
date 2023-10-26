// Define the head function
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// Define the assertEqual function
const assertEqual = require('./assertEqual');

// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["hi", "Lighthouse", "Labs"]), "Hello"); 
assertEqual(head([5]), 5); // Should pass
assertEqual(head([]), undefined); // Should pass


module.exports = head;