const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(arr) {
  const lettercount = {};
  // Loop through each letter in the string array
  for (const letter of arr) {
    // Skip counting if the letter is a space
    if (letter === ' ') {
      continue;
    }
    // If the letter exists in the object, increment its count; otherwise, set its count to 1
    if (lettercount[letter]) {
      lettercount[letter]++;
    } else {
      lettercount[letter] = 1;
    }
  }
  return lettercount;
};

// Test code
const example = 'LHL';
const result = countLetters(example);
console.log(result); // Output: { L: 2, H: 1 }

assertEqual(result['L'], 2); // Testing the count of 'L'
assertEqual(result['H'], 1); // Testing the count of 'H'