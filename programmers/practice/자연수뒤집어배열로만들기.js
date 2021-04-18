function solution(n) {
  return (n + '')
    .split('')
    .map((el) => Number(el))
    .reverse();
}

console.log(solution(12345));
