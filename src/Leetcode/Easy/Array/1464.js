/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const firstMaxVal = Math.max(...nums);
  const idx = nums.indexOf(firstMaxVal);
  nums.splice(idx, 1);
  const secondMaxVal = Math.max(...nums);
  return (firstMaxVal - 1) * (secondMaxVal - 1);
};

const nums = [3, 4, 5, 2];
console.log(maxProduct(nums));
