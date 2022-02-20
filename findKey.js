// FUNCTION
const findKey = function(obj, callback) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (callback(obj[keys[i]])) {
      return keys[i];
    }
  }
  return undefined;
};

// EXPORT
module.exports = findKey;
