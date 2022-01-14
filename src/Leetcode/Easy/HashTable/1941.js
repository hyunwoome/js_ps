/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) === undefined ? 1 : map.get(s[i]) + 1);
  }

  let arr = [];
  for (let value of map.values()) {
    arr.push(value);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) return false;
  }
  return true;
};

const s = 'abacbc';
console.log(areOccurrencesEqual(s));
