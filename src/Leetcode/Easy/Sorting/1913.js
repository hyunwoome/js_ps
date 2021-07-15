/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let sorting = nums.sort((a, b) => a - b);
  return (
    sorting[sorting.length - 1] * sorting[sorting.length - 2] -
    sorting[0] * sorting[1]
  );
};

const nums = [5, 6, 2, 7, 4];
console.log(maxProductDifference(nums));
