// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let answer = 0;
  for (let i = 1; i <= line; i++) {
    if (i % 3 === 0 || i % 5 === 0) answer += i;
  }
  console.log(answer);
  rl.close();
}).on('close', function () {
  process.exit();
});
