// boj 9613 (117) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split('\n');

const n = Number(input.shift());
const splitted = input.map((el) => el.split(' '));

const gcd = (a, b) => {
  while (b !== 0) {
    let t = b; // t = 20 // t = 10
    b = a % b; // b = 10 // b = 0
    a = t; // 10 // 10
  }
  return a;
};

for (let i = 0; i < n; i++) {
  var x = input
    .shift()
    .split(' ')
    .filter(function (e, i) {
      return i > 0;
    })
    .map(function (e) {
      return parseInt(e);
    });
  let a = 0;
  for (let j = 0; j < x.length - 1; j++) {
    for (let k = j + 1; k < x.length; k++) {
      a += gcd(x[j], x[k]);
    }
  }
  console.log(a);
}
