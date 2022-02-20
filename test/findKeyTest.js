// REQUIREMENTS
const findKey = require('../findKey');
const assertEqual = require('../assertEqual');

// TEST CODE
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