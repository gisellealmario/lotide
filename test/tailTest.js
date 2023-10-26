const tail = require('../tail');
const assertEqual = require('../assertEqual')

//test cases

const name = ['sandra', 'imee', 'peps'];
console.log(tail(name));
assertEqual(tail(name), ['sandra', 'imee'])