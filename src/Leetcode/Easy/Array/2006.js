const countKDifference = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) result++;
    }
  }
  return result;
};

const nums = [3, 2, 1, 5, 4];
const k = 2;
console.log(countKDifference(nums, k));
