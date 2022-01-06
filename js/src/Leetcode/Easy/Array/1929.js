/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let answer = [];
  let i = 0;
  let j = 0;
  while (i < nums.length * 2) {
    answer.push(nums[j]);
    i++;
    j++;
    j = j % nums.length;
  }
  return answer;
};

const nums = [1, 2, 1];
console.log(getConcatenation(nums));
