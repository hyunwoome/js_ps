/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = k - 1;
  let min = Infinity;

  while (right < nums.length) {
    min = Math.min(min, nums[right] - nums[left]);
    right++;
    left++;
  }
  return min;
};

const nums = [9, 4, 1, 7];
const k = 2;
console.log(minimumDifference(nums, k));
