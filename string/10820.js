// boj 10820 (104) ('/dev/stdin')
const input = require('fs').readFileSync('string/input', 'utf8').split('\n');

// 소문자, 대문자, 숫자, 공백 개수

const t = input.filter((str) => str.length < 1);

if (t.length) {
  input.splice(input.indexOf(t[0]), 1);
}

for (let i = 0; i < input.length; i++) {
  let lower = input[i].length - input[i].replace(/[a-z]/g, '').length;
  let upper = input[i].length - input[i].replace(/[A-Z]/g, '').length;
  let numbers = input[i].length - input[i].replace(/[0-9]/g, '').length;
  let space = input[i].length - input[i].replace(/\ /g, '').length;
  console.log(lower, upper, numbers, space);
}
