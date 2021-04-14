// boj 1935 (100) ('/dev/stdin')
const input = require('fs')
  .readFileSync('stack/input', 'utf8')
  .trim()
  .split('\n');
const N = Number(input.shift()); // 5
const exp = input.shift(); // ABC*+DE/-

let S = [];
exp.split('').forEach((e) => {
  switch (e) {
    case '+':
    case '-':
    case '*':
    case '/':
      var a = S.pop();
      var b = S.pop();
      S.push(eval(b + e + a));
      break;
    default:
      S.push(Number(input[e.charCodeAt() - 65]));
  }
});

console.log(S[0].toFixed(2));
