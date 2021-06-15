/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const res = new Array(nums.length + 1).fill(-1);
  for (const num of nums) res[num] = num;
  return res.indexOf(-1);
};

const nums = [3, 0, 1];
console.log(missingNumber(nums));
