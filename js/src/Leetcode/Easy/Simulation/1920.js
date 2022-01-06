/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.push(nums[nums[i]]);
  }
  return answer;
};

const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArray(nums));
