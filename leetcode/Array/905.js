/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let even = [];
  let odd = [];
  for (let x of nums) {
    if (x % 2) odd.push(x);
    else even.push(x);
  }
  let answer = [...even, ...odd];
  return answer;
};

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
