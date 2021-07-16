// boj 1929 (112) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split(' ');
const MAX = 1000000;
const M = Number(input.shift());
const N = Number(input.shift());
let isPrimeArr = Array(N + 1).fill(true);
let square = 0;
isPrimeArr[0] = isPrimeArr[1] = false;

for (let i = 2; i < N; i++) {
  if (isPrimeArr[i]) {
    if (Number(Math.pow(i, 2)) > MAX) {
      break;
    } else {
      for (square = Number(Math.pow(i, 2)); square < N + 1; ) {
        isPrimeArr[square] = false;
        square += i;
      }
    }
  }
}

for (let i = M; i < N + 1; i++) {
  if (isPrimeArr[i]) {
    console.log(i);
  }
}
