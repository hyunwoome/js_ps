/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });

  var result = 0;

  for (var i = 0; i < nums.length; i = i + 2) {
    result += nums[i];
  }
  return result;
};

const nums = [6, 2, 6, 5, 1, 2];
console.log(arrayPairSum(nums));
