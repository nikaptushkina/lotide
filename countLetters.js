const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

countLetters("LHL");
console.log(countLetters("LHL"));