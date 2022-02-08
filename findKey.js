const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (callback(obj[keys[i]])) {
      return keys[i];
    }
  }
  return undefined;
};

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let actual = findKey(object, x => x.stars === 2);
let expected = "noma";
assertEqual(actual, expected);
