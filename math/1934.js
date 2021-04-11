// boj 1934 (111) ('/dev/stdin')
const input = require('fs').readFileSync('math/input', 'utf8').split('\n');
const T = Number(input.shift());
const splitted = input.map((el) => el.split(' '));

function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (let i = 0; i < T; i++) {
  let gratest = gcd(splitted[i][0], splitted[i][1]);
  console.log((splitted[i][0] * splitted[i][1]) / gratest);
}
