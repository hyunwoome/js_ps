// boj 10808 (102) ('/dev/stdin')

const input = require('fs')
  .readFileSync('string/input', 'utf8')
  .trim()
  .split('');

let answer = Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  answer[input[i].charCodeAt(0) - 97] += 1;
}

console.log(answer.join(' '));
