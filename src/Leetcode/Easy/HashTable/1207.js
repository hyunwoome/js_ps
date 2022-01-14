/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  let set = new Set();
  for (let key in obj) {
    set.add(obj[key]);
  }
  return set.size === Object.values(obj).length;
};
