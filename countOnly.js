// Function to compare actual and expected values
const assertEqual = function(actual, expected) {
  // Check if the values are equal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`); // Log a passing message if they are equal
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`); // Log a failure message if they are not equal
  }
};

// Function to count specific items in an array
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // Initialize an empty object to store the counts

  // Loop through each item in the allItems array
  for (const item of allItems) {
    // Check if the item should be counted based on the itemsToCount object
    if (itemsToCount[item]) {
      // If the item is found, increment its count in the results object
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results; // Return the object containing the counts of specific items
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// Calling the countOnly function with specific items to count
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Asserting if the counts of specific items are as expected
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;