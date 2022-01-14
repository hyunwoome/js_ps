function solution(arr) {
  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

const arr = [2, 6, 8, 14];
console.log(solution(arr));
