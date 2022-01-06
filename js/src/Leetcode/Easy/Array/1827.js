/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let sum = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      sum += diff;
      nums[i] += diff;
    }
  }

  return sum;
};

const nums = [1, 5, 2, 4, 1];
console.log(minOperations(nums));
