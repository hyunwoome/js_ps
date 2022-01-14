/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let answer = [];
  for (let i = 0; i < nums.length - n; i++) {
    answer.push(nums[i]);
    answer.push(nums[i + n]);
  }
  return answer;
};

const nums = [1, 1, 2, 2];
const n = 2;
console.log(shuffle(nums, n));
