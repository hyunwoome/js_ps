// boj 11656 (108) ('/dev/stdin')
let input = require('fs').readFileSync('sort/input', 'utf8').trim();

let result = [];
let num = input.length - 1;
while (num >= 0) {
  result.push(input.slice(num, input.length));
  num--;
}
console.log(result.sort((a, b) => a.localeCompare(b)).join('\n'));
