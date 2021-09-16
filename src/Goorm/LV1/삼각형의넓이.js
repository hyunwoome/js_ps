// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
  const [a, b] = input[0].split(' ').map(Number);
  console.log(((a * b) / 2).toFixed(1));
  rl.close();
}).on('close', function () {
  process.exit();
});
