/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (const num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let [key, value] of Object.entries(obj)) {
    if (value === 1) return parseInt(key);
  }
};

const nums = [2, 2, 1];
console.log(singleNumber(nums));
