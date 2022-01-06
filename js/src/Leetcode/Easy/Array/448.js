/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const answer = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) answer.push(i);
  }
  return answer;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
