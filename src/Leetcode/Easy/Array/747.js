/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  const max = Math.max(...nums);
  const idx = nums.indexOf(max);
  nums.splice(idx, 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] * 2 > max) return - 1;
  }
  return idx;
};

const nums = [1];
console.log(dominantIndex(nums));
