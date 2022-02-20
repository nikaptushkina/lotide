// FUNCTION
const countLetters = function(str) {
  let counter = {};
  for (let value of str) {
    if (value === ' ') {
      continue;
    } else {
      counter[value] = (counter[value] || 0) + 1;
    }
  }
  return counter;
};

// EXPORT
module.exports = countLetters;