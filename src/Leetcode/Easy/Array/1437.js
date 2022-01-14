/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let count = k;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (count < k) {
        return false;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return true;
};

const nums = [1, 0, 0, 1, 0, 1];
const k = 2;
console.log(kLengthApart(nums, k));
