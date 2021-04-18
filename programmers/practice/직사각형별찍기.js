function solution(a, b) {
  let answer = '';
  for (let i = 0; i < b; i++) {
    answer += '*'.repeat(a) + '\n';
  }
  return answer;
}

console.log(solution(5, 3));
