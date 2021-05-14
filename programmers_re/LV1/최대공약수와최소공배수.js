function solution(n, m) {
  function gcd(a, b) {
    let min = 1;
    for (let i = 2; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) min = i;
    }
    return min;
  }
  function lcm(a, b) {
    let g = gcd(a, b);
    return g * (a / g) * (b / g);
  }
  return [gcd(n, m), lcm(n, m)];
}

const n = 3;
const m = 12;
console.log(solution(n, m));
