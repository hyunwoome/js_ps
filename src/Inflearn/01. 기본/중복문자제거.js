function solution(str) {
  return Array.from(new Set(str)).join('');
}

function solution1(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

console.log(solution('ksekkset'));
console.log(solution1('ksekkset'));
