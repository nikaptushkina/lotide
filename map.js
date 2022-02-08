/*
map function will take an array to map, and a callback function
*/

const eqArrays = require('./eqArrays');
const assertArraysEqual =require('./assertArraysEqual');

const words = ["grounds", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + ' ' + 'word')
assertArraysEqual(results2, ["grounds word", "control word", "to word", "major word", "tom word"]);

const results3 = map(words, word => word.length)
assertArraysEqual(results3, [7, 7, 2, 5, 3]);

const results4 = map(words, word => word[4])
assertArraysEqual(results4, ['n','r', undefined, 'r', undefined]);