// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let nums = +line;
  let odd = 1;
  while (nums) {
    let answer = '';
    for (let i = 1; i < nums; i++) {
      answer += ' ';
    }
    for (let i = 0; i < odd; i++) {
      answer += '*';
    }
    odd += 2;
    nums--;
    console.log(answer);
  }
}).on('close', function () {
  process.exit();
});
