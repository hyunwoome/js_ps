// boj 1463 (123) ('/dev/stdin')
const input = parseInt(
  require('fs').readFileSync('baekjoon/dp/input', 'utf8').trim(),
);

let d = Array(input + 1).fill(0);
d[1] = 0;
d[2] = 1;
d[3] = 1;
let min = 0;
for (let i = 4; i <= input; i++) {
  let a = input;
  let b = input;
  let c = input;
  if (i % 2 === 0) {
    a = d[i / 2] + 1;
  }
  if (i % 3 === 0) {
    b = d[i / 3] + 1;
  }
  c = d[i - 1] + 1;
  min = Math.min(a, b, c);
  d[i] = min;
}
console.log(d);
console.log(d[input]);
