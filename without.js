

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const without = function (arr,[itemsToRemove]) {
  let filteredArray = arr.filter(item => !itemsToRemove.includes(item));
  return filteredArray
    
}


const words = ["hello", "world", "lighthouse"];

console.log (without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log (assertArraysEqual(words, ["hello", "world", "lighthouse"]));



