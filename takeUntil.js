// will take 2 parametes: arrya; callback or predicate
const eqArrays = require('./eqArrays');
const assertArraysEqual =require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = [];
  for (let i=0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, data1.slice(0, 5));
assertArraysEqual(results2, data2.slice(0, 4));