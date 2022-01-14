// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = +line; // 5
  const one = [1, 2, 3, 4, 5, 6];
  const two = [1, 2, 3, 4, 5, 6];
  for (const i of one) {
    for (const j of two) {
      if (i === input || j === input) break;
      if (i + j === input) console.log(`${i} ${j}`);
    }
  }
}).on('close', function () {
  process.exit();
});
