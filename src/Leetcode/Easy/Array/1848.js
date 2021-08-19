/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      min = Math.min(Math.abs(i - start), min);
    }
  }
  return min;
};

const nums = [1, 2, 3, 4, 5];
const target = 5;
const start = 3;
console.log(getMinDistance(nums, target, start));
