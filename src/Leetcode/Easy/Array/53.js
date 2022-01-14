/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let omax = nums[0];
  let cmax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cmax = Math.max(nums[i], nums[i] + cmax);
    omax = Math.max(cmax, omax);
  }
  return omax;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
