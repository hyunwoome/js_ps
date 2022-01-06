const maxSubArray = (nums) => {
  let prev = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};

const nums = [-2, -1];
console.log(maxSubArray(nums));
