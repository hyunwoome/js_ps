function solution(left, right) {
  function divisor(num) {
    let answer = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        answer++;
      }
    }
    return answer;
  }

  let answer = 0;
  for (let i = left; i <= right; i++) {
    let div = divisor(i);
    if (div % 2) answer -= i;
    else answer += i;
  }
  return answer;
}

const left = 13;
const right = 17;
console.log(solution(left, right));
