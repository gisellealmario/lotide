const head = require('../head');
const assertEqual = require('../assertEqual');
module.exports = head;
assertEqual(head([3, 5]), 7);