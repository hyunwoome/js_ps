/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let answer = 0;
  nums.forEach((number) => {
    if (!(String(number).length % 2)) answer++;
  });
  return answer;
};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));
