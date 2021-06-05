function solution(s) {
  const arr = s.split(' ');
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max].join(' ');
}

const s = '1 2 3 4';
console.log(solution(s));
