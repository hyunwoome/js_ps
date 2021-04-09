// boj 10809 (103) ('/dev/stdin')

const input = require('fs').readFileSync('string/input', 'utf8').trim();
const result = [];

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  // i = 숫자
  result.push(input.indexOf(String.fromCharCode(i)));
  // baekjoon.indexOf(숫자를 알파벳으로 변경 후 인덱스를 반환하고 푸쉬)
}

console.log(result.join(' '));
