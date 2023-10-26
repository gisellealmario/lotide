// Define the head function
const tail = function(array) {
  return array.slice(1);
  
};

// Define the assertArraysEqual function
const assertEqual = require('./assertEqual');


// Test cases
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
const a = tail(words)
console.log(tail(words));

assertEqual(a, ["Yo Yo", "Lighthouse"]); //fail

module.exports = tail;