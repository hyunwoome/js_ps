/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let left = {};
  let right = {};
  let count = {};
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
    max = Math.max(max, count[nums[i]]);
    if (left[nums[i]] === undefined) {
      left[nums[i]] = i;
    }
    right[nums[i]] = i;
  }

  let res = nums.length;
  for (const k in count) {
    if (count[k] === max) {
      res = Math.min(res, right[k] - left[k] + 1);
    }
  }
  return res;
};

const nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums));
