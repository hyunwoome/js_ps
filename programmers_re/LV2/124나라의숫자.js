function solution(n) {
  let number = [4, 1, 2];
  let answer = '';
  while (n) {
    answer = number[n % 3] + answer;
    n = Math.floor(n / 3);
  }
  return answer;
}

const n = 6;
console.log(solution(n));
