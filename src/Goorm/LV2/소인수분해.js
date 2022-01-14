// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let num = +line;
  let k = 2;
  const answer = [];
  while (num !== 1) {
    if (num % k === 0) {
      answer.push(k);
      num /= k;
    } else k++;
  }
  console.log(answer.join(' '));
}).on('close', function () {
  process.exit();
});
