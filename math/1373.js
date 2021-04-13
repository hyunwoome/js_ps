// boj 1373 (119) ('/dev/stdin')
let input = require('fs').readFileSync('math/input', 'utf8').trim();
let answer = '';
while (input.length >= 3) {
  answer = parseInt(input.slice(input.length - 3), 2).toString(8) + answer;
  input = input.slice(0, input.length - 3);
}

console.log((input ? parseInt(input, 2).toString(8) : '') + answer);
