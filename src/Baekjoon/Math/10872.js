// boj 10872 (114) ('/dev/stdin')
const input = Number(require('fs').readFileSync('math/input', 'utf8').trim());

let sum = 1;
for (let i = 1; i <= input; i++) {
  sum *= i;
}

console.log(sum);
