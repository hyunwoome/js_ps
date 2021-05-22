function solution(nums) {
  let n = nums.length / 2;
  let set = new Set(nums);
  return n > set.size ? set.size : n;
}

const nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));
