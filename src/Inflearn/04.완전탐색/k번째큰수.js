const solution = (n, k, nums) => {
  const allCard = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        allCard.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  const set = new Set(allCard.sort((a, b) => b - a));
  return Array(...set)[k - 1];
};
const n = 10;
const k = 3;
const nums = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(n, k, nums));
