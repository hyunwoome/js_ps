function solution(n) {
  const base3 = n.toString(3);
  const toArr = base3.split('').reverse();
  const toStr = toArr.join('');
  return parseInt(toStr, 3);
}

const n = 45;
console.log(solution(n));
