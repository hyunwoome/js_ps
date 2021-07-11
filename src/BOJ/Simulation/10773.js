// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n')
  .map((input) => Number(input));
const N = input.shift();

let stack = [];
for (let i = 0; i < N; i++) {
  if (input[i] !== 0) stack.push(input[i]);
  else stack.pop();
}

if (stack.length) {
  console.log(stack.reduce((acc, cur) => acc + cur));
} else {
  console.log(0);
}
