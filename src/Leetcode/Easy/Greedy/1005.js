/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let i = 0;
  while (k) {
    if (!nums[i]) break;
    nums[i] = -nums[i];
    if (nums[i] > nums[i + 1]) i++;
    k--;
  }
  return nums;
};

const nums = [2, -3, -1, 5, -4];
const k = 2;
console.log(largestSumAfterKNegations(nums, k));
