// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n');

let max = [];
let station = 0;
input.forEach((nums) => {
  let arr = nums.split(' ');
  station -= Number(arr[0]);
  station += Number(arr[1]);
  max.push(station);
});
console.log(Math.max(...max));
