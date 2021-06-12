/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums.sort((a, b) => b - a);
  let removeDuplicate = Array.from(new Set(nums));
  if (removeDuplicate.length === 1) return removeDuplicate[0];
  if (removeDuplicate.length < 3) {
    return Math.max(...removeDuplicate);
  }
  return removeDuplicate[2];
};

const nums = [2, 2, 3, 1];
console.log(thirdMax(nums));
