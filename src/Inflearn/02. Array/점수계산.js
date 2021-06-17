function solution(nums) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      sum++;
      answer += sum;
    } else {
      sum = 0;
    }
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
