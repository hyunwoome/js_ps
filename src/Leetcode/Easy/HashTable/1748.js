/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let obj = {};
  let answer = 0;
  for (const num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) answer += Number(key);
  }
  return answer;
};

const nums = [1, 1, 1, 1];

console.log(sumOfUnique(nums));
