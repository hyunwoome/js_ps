/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function(nums) {
  let len = nums.length;
  let middleIndex = 0;
  while (len) { // 5
    let rightSum = 0;
    let leftSum = 0;
    for (let i = 0; i < middleIndex; i++) {
      rightSum += nums[i];
    }
    for (let i = middleIndex + 1; i < nums.length; i++) {
      leftSum += nums[i];
    }
    if (rightSum === leftSum) {
      return middleIndex;
    } else {
      middleIndex++;
      len--;
    }
  }
  return -1;
};

const nums = [1];
console.log(findMiddleIndex(nums));
