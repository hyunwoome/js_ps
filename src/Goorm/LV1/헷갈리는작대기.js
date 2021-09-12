// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let one = 0;
let I = 0;
let l = 0;
let sp = 0;

rl.on('line', function (line) {
  for (const word of line) {
    if (word === '1') one++;
    else if (word === 'I') I++;
    else if (word === 'l') l++;
    else if (word === '|') sp++;
  }
  console.log(one);
  console.log(I);
  console.log(l);
  console.log(sp);
}).on('close', function () {
  process.exit();
});

// 1
// I
// l
// |
