// boj 1874 (91) ('/dev/stdin')

const input = require('fs')
  .readFileSync('stack/input', 'utf8')
  .split('\n')
  .map((el) => Number(el));

const stack = [];
let result = '';

for (let i = 1, pi = 1; i <= input[0]; i++) {
  if (pi <= input[i]) {
    while (pi - 1 < input[i]) {
      stack.push(pi++);
      result += '+\n';
    }
    stack.pop();
    result += '-\n';
  } else {
    if (stack[stack.length - 1] > input[i]) {
      console.log('NO');
      return;
    }
    stack.pop();
    result += '-\n';
  }
}
console.log(result);
