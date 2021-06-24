/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  var len = nums.length;
  let temp;

  for (var i = 0, j = len - 1; i < j; ++i) {
    if (nums[i] % 2 !== 0) {
      while (j > i) {
        if (nums[j] % 2 === 0) {
          temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          --j;
          break;
        }
        --j;
      }
    }
  }
  return nums;
};

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
