// REQUIREMENTS
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION
const without = function(source, itemsToRemove) {
  let newlist = [];
  for (let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      newlist.push(source[i]);
    }
  }
  return newlist;
};

// EXPORT
module.exports = without;