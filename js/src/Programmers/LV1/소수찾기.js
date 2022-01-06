function solution(n) {
  let answer = 0;
  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    let divisor = 3;
    while (n > divisor) {
      if (n % divisor === 0) return false;
      divisor += 2;
    }
    return true;
  }
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) answer += 1;
  }
  return answer;
}

const n = 10;
console.log(solution(n));
