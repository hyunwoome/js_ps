// boj 1158 (94) ('/dev/stdin')
const fs = require('fs')
  .readFileSync('queue/input', 'utf8')
  .trim()
  .split(' ')
  .map((el) => Number(el)); // [7, 3]

let rotate = []; // 1, 2, 3, 4, 5, 6, 7
let answer = '<';
let m = fs[0]; // 7
let k = fs[1]; // 3
let count = 0;

for (let i = 1; i <= m; i++) {
  rotate.push(i);
}

while (rotate.length) {
  count++;
  if (count === k) {
    answer += rotate.shift();
    if (rotate.length) {
      answer += ', ';
      count = 0;
    } else {
      answer += '>';
    }
  } else {
    rotate.push(rotate.shift());
  }
}
