/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let min = Infinity;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    min = Math.min(min, sum);
  }
  return min < 0 ? -min + 1 : 1;
};

const nums = [-3, 2, -3, 4, 2];
console.log(minStartValue(nums));
