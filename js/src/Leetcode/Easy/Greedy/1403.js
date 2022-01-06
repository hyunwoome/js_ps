/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  const sortArr = nums.sort((a, b) => b - a);
  let sum = nums.reduce((acc, cur) => acc + cur);
  let tmp = 0;
  let answer = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (tmp <= sum) {
      tmp += sortArr[i];
      sum -= sortArr[i];
      answer.push(sortArr[i]);
    }
  }
  return answer;
};

const nums = [4, 4, 7, 6, 7];
console.log(minSubsequence(nums));
