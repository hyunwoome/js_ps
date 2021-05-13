/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let mul = nums.reduce((acc, cur) => acc * cur);
  if (mul > 0) return 1;
  else if (mul < 0) return -1;
  else return 0;
};

const nums = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(nums));
