/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let divideLen = nums.length / 2;
  let obj = {};
  for (const num of nums) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === divideLen) return Number(key);
  }
};

const nums = [1, 2, 3, 3];
console.log(repeatedNTimes(nums));
