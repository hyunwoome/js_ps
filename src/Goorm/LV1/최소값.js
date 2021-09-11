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
  const n = input.shift();
  const arr = input.shift().split(' ');
  console.log(Math.min(...arr));
  process.exit();
});
