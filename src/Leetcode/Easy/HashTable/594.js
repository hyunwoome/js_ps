/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let obj = {};
  for (const i of nums) obj[i] = obj[i] + 1 || 1;

  let max = 0;
  for (let i in obj) {
    const key = Number(i);
    const next = key + 1;
    if (obj[next] !== undefined) {
      max = Math.max(max, obj[key] + obj[next]);
    }
  }
  return max;
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));
