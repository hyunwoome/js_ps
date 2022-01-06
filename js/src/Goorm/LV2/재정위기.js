// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const arr = input.shift().split(' ').map(Number);
  const inc = arr.sort((a, b) => a - b);
  console.log(inc[1]);
  process.exit();
});
