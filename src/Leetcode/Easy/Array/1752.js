/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let sortingArr = [...nums].sort((a, b) => a - b);
  let pivot = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) pivot = i;
  }
  const arr = [...nums.slice(pivot), ...nums.slice(0, pivot)];
  return JSON.stringify(sortingArr) === JSON.stringify(arr);
};

const nums = [2, 1, 3, 4];
console.log(check(nums));

// [2, 1, 3, 4]
// [2, 3, 4, 1]
