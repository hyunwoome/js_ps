// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = +line;

  let num = 2;
  let arr = [];
  while (num < 10) {
    for (let i = 1; i <= 9; i++) {
      arr.push(`${num} * ${i} = ${num * i}`);
      if (arr.length === input) {
        console.log(arr.join(' ') + ' ');
        arr = [];
      }
    }
    num++;
  }
}).on('close', function () {
  process.exit();
});
