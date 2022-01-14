// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const arr = input[0].split(' ').map(Number);
  console.log(Math.min(...arr));
  process.exit();
});
