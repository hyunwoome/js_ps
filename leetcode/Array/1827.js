/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] >= nums[i + 1]) {
      while (nums[i] >= nums[i + 1]) {
        nums[i + 1]++;
        answer++;
      }
    }
  }
  return answer;
};

const nums = [1, 1, 1];
console.log(minOperations(nums));
