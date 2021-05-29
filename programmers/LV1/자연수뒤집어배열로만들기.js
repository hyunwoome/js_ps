function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map((el) => parseInt(el));
}

const n = 12345;
console.log(solution(n));
