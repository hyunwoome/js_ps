const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((el) => Number(el));

// const input = [38, 24];
const count = input[0];
const average = input[1];

console.log(count * (average - 1) + 1);
