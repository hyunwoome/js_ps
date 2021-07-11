const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .trim()
  .split('\n');

const TC = input.shift();
let base = input[0].split('');

for (let i = 0; i < base.length; i++) {
  for (let j = 1; j < input.length; j++) {
    if (base[i] !== input[j][i]) {
      base[i] = '?';
    }
  }
}

console.log(base.join(''));
