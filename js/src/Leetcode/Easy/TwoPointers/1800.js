/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) sum = 0;
    sum += nums[i];
    max = Math.max(sum, max);
  }
  return max;
};

const nums = [10, 20, 30, 5, 10, 50];
console.log(maxAscendingSum(nums));
