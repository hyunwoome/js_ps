const solution = (nums) => {
  return nums.reduce((acc, cur) => Math.min(acc, cur));
};

const arr = [6, 5, 11];
console.log(solution(arr));
