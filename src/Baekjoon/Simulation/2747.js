var fs = require('fs');
var input = fs.readFileSync('/dev/stdin');

// let input = 10;
let arr = new Array(50).fill(0);
arr[1] = 1;
for (let i = 2; i <= 45; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr[Number(input)]);
