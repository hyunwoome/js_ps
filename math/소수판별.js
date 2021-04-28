function isPrime(n) {
  // 1이하일 경우엔 소수가 아님
  if (n <= 1) return false;

  // 2와 3일 경우엔 소수
  if (n === 2 || n === 3) return true;

  // 2를 제외한 짝수는 소수가 아님
  if (n % 2 === 0) return false;

  // 최대 n - 1까지 반복
  let divisor = 3;
  while (n > divisor) {
    // 0으로 떨어진다면 소수가 아님
    if (n % divisor === 0) return false;

    // 홀수일 경우를 판단
    divisor += 2;
  }
  // 모든 조건을 통과했을 경우 소수로 인정
  return true;
}

console.log(isPrime(10)); // false;
console.log(isPrime(71)); // true;
