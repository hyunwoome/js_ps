/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let hash = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] ? 2 : 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1) {
      count += nums[i];
    }
  }
  return count;
};

const nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));
