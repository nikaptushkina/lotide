// REQUIREMENTS
const eqObjects = require('./eqObjects');

// FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(JSON.stringify(actual), JSON.stringify(expected))) {
    console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

// EXPORT
module.exports = assertObjectsEqual;
