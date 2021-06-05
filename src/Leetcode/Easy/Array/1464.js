/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const maxOne = Math.max(...nums);
  const maxIndex = nums.indexOf(maxOne);
  nums.splice(maxIndex, 1);
  const maxTwo = Math.max(...nums);
  return (maxOne - 1) * (maxTwo - 1);
};

const nums = [3, 7];
console.log(maxProduct(nums));
