/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 0 === 28 - 0 - 1 ( 27 ) 0
    // 1 === 28 - 1 - 7 ( 20 ) 1
    // 8 === 28 - 7 - 3 ( 18 ) 2
    // 11 === 28 - 11 - 6 ( 11 ) 3
    if (leftSum === sum - leftSum - nums[i]) { return i }
    // 0 += 1 ( 1 )
    // 1 += 7 ( 8 )
    // 8 += 3 ( 11 )
    leftSum += nums[i];
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));