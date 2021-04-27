// boj 1918 (101) ('/dev/stdin')

const input = require('fs')
  .readFileSync('stack/input', 'utf8')
  .trim()
  .split('');

const stack = [];
let result = '';

for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case '(':
      stack.push(input[i]);
      break;
    case ')':
      while (stack.length && stack[stack.length - 1] !== '(') {
        result += stack.pop();
      }
      stack.pop();
      break;
    case '+':
    case '-':
      while (stack.length && stack[stack.length - 1] !== '(') {
        result += stack.pop();
      }
      stack.push(input[i]);
      break;
    case '*':
    case '/':
      while (
        (stack.length && stack[stack.length - 1] === '*') ||
        stack[stack.length - 1] === '/'
      ) {
        result += stack.pop();
      }
      stack.push(input[i]);
      break;
    default:
      result += input[i];
  }
}

while (stack.length) {
  result += stack.pop();
}

console.log(result);
