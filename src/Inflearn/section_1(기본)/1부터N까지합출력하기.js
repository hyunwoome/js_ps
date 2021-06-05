function solution(nums) {
  let answer = 0;
  for (let i = 1; i <= nums; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));
