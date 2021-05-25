function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
    let tmp = 0;
    for (let j = i; j <= n; j++) {
      tmp = tmp + j;
      if (tmp === n) {
        answer++;
        break;
      } else if (tmp > n) {
        break;
      }
    }
  }
  return answer;
}

const n = 15;
console.log(solution(n));
