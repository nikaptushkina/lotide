// REQUIREMENTS
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});