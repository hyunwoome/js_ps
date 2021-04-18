function solution(n) {
  let str = (n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return +str;
}

console.log(solution(118372));
