const assertEqual = function(actual, expected) {
  // Check if the values are equal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`); // Log a passing message if they are equal
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`); // Log a failure message if they are not equal
  }
};

const countLetters = function (arr) {
  const lettercount = {};
  for (const letter of arr) {
    if (lettercount[letter]) {
      lettercount[letter]++;
    } else {
      lettercount[letter] = 1;

      }
  }
  return lettercount;

};
//test code 
const example = 'LHL';

const result = countLetters(example);

console.log(result);