// REQUIREMENTS
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"]), ["2"])
