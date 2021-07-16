const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((el) => Number(el));

// const input = [12, 77, 38, 41, 53, 92, 85];

let sum = 0;
let min = Infinity;
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 1) {
    sum += input[i];
    min = Math.min(min, input[i]);
  }
}
if (sum === 0) console.log(-1);
else console.log(`${sum}\n${min}`);
