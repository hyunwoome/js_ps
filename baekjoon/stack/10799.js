// boj 10799 (97) ('/dev/stdin')
const fs = require('fs').readFileSync('stack/input', 'utf8').trim();

let result = 0;
let stack = [];

for (let i = 0; i < fs.length; i++) {
  if (fs[i] === '(') {
    stack.push(fs[i]);
  } else {
    stack.pop();
    if (fs[i - 1] === '(') {
      result += stack.length;
    } else {
      result++;
    }
  }
}

console.log(result);
