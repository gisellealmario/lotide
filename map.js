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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
// Example 1: Squaring each element in the array
const numbers = [1, 2, 3, 4, 5];
const square = num => num * num;
const result = map(numbers, square);
assertArraysEqual(result, [1, 4, 9, 16, 25]);

// Example 2: Mapping an array of strings to their lengths
const strings = ["hello", "world", "how", "are", "you"];
const getLength = str => str.length;
console.log(map(strings, getLength));

// Example 3: Converting an array of names to uppercase
const names = ["alice", "bob", "charlie", "david"];
const toUpper = name => name.toUpperCase();
console.log(map(names, toUpper));

