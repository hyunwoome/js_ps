// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let answer = '';
  while (line) {
    for (let i = 0; i < line; i++) {
      answer += '*';
    }
    if (line === 1) break;
    answer += '\n';
    line--;
  }
  console.log(answer);
}).on('close', function () {
  process.exit();
});
