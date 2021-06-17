function solution(str) {
  let answer = '';
  let lower = str.toLowerCase();
  let len = Math.floor(lower.length / 2);
  for (let i = 0; i < len; i++) {
    if (lower[i] === lower[lower.length - i - 1]) answer = 'YES';
    else return 'NO';
  }
  return answer;
}

function solution1(str) {
  str = str.toLowerCase();
  if (str === str.split('').reverse().join('')) return 'YES';
  else return 'NO';
}

console.log(solution('12333233'));
console.log(solution1('12341'));
