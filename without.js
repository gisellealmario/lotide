

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

const without = function (arr, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!itemsToRemove.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
    return newArray;
}


const words = ["hello", "world", "lighthouse"];

console.log (without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log (assertArraysEqual(words, ["hello", "world", "lighthouse"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS

module.exports = without;