/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  if (nums === null || nums.length <= 1) return 0;
  let min = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
  }
  return sum - min * nums.length;
};

const nums = [1, 2, 3];
console.log(minMoves(nums));
