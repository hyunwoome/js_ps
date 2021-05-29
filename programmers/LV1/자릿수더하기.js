function solution(n) {
  const numArr = String(n)
    .split('')
    .map((el) => parseInt(el));
  return numArr.reduce((acc, cur) => acc + cur);
}

const n = 123;
console.log(solution(n));
