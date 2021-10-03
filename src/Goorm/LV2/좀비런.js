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
  const zombies = +input.shift();
  const nums = input.shift().split(' ').map(Number);
  console.log(Math.max(...nums));
  process.exit();
});
