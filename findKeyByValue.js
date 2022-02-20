// FUNCTION
const findKeyByValue = function(obj, objValue) {
  let keys = Object.keys(obj);
  let index = 0;
  for (let filmType in obj) {
    let str = obj[filmType];
    if (str === objValue) {
      return keys[index];
    }
    index++;
  }
  return undefined;
};

// EXPORT
module.exports = findKeyByValue;