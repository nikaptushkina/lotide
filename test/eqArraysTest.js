// REQUIREMENTS
const eqArrays = require('../eqArrays');

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // should be true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // should be false