// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const answer = [];
  for (let i = 1; i <= line; i++) {
    if (line % i === 0) answer.push(i);
  }
  console.log(answer.join(' ') + ' ');
  rl.close();
}).on('close', function () {
  process.exit();
});
