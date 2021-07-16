var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

// const input = [15, 28, 1];

let E = input[0];
let S = input[1];
let M = input[2];
let year = 0;

let num = 1;
while (true) {
  year++;
  if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
    console.log(year);
    break;
  }
  num++;
}
