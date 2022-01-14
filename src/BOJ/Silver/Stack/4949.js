function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/stack/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  for (let i = 0; i < input.length; i++) {
    let stack = [];
    if (input[i] === '.') break;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '(') stack.push('(');
      else if (input[i][j] === '[') stack.push('[');
      else if (input[i][j] === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (input[i][j] === ')' && stack[stack.length - 1] !== '(') {
        stack.push(')');
      } else if (input[i][j] === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (input[i][j] === ']' && stack[stack.length - 1] !== '[') {
        stack.push(']');
      } else if (input[i][j] === ' ') {
        continue;
      }
    }
    if (stack.length === 0) console.log('yes');
    else console.log('no');
  }
}

solution();
