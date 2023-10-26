const tail = require('../tail');
const assertEqual = require('../assertEqual')
module.exports = tail;

//test cases

const name = ['sandra', 'imee', 'peps'];

assertEqual(tail(name), 'sandra')