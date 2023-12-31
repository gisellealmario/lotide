// const tail = require('../tail');
// const assertEqual = require('../assertEqual')


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns 'pepie, aiko, daui' for ['imee, pepie, aiko, daui']", () => {
    const names = ['imee', 'pepie', 'aiko', 'daui'];
    const a = tail(names)
    assert.deepEqual(a, ['pepie', 'aiko', 'daui']); 
  });
});