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
  let str = input.shift();
  let [start, end] = input[0].split(' ').map(Number);
  console.log(str.substr(start - 1, end));
  process.exit();
});
