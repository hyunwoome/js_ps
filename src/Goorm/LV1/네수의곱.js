// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
  const nums = input[0].split(' ').map(Number);
  console.log(nums.reduce((acc, cur) => acc * cur));
  rl.close();
}).on('close', function () {
  process.exit();
});
