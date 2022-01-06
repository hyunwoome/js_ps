// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let answer = [];
  for (let i = 1; i <= line; i++) {
    if (i % 3 === 0) answer.push('X');
    else answer.push(i);
  }
  console.log(answer.join(' ') + ' ');
}).on('close', function () {
  process.exit();
});
