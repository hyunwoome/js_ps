/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    result.push(sum + nums[i]);
    sum += nums[i];
  }
  return result;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
