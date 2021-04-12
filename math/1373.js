// boj 1373 (119) ('/dev/stdin')
let input = require('fs').readFileSync('math/input', 'utf8').trim().split('');
let a = '';
while (input.length > 0) {
  let k = input.pop();
  k = (input.length > 0 ? input.pop() : '') + k; // 0
  k = (input.length > 0 ? input.pop() : '') + k; // 0
  a = parseInt(k, 2).toString(8) + a;
  console.log(a);
}
console.log(a);
