// REQUIREMENTS
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CODE
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);
