// boj 1676 (115) ('/dev/stdin')
const input = Number(require('fs').readFileSync('math/input', 'utf8').trim());
let count = 0;
for (let i = 1; i <= input; i++) {
  if (i % 5 === 0) count++;
  if (i % 25 === 0) count++;
  if (i % 125 === 0) count++;
}

console.log(count);
