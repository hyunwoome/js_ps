/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let obj = {};
  for (const num of arr) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  for (const [key, value] of Object.entries(obj)) {
    if ((value / arr.length) * 100 > 25) return key;
  }
};

const arr = [1, 1];
console.log(findSpecialInteger(arr));
