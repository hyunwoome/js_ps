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
  const [a, b] = input.shift().split(' ').map(Number);
  const nums = Array.from({ length: b - a + 1 }, (_, i) => i + a);
  const odds = nums.filter((num) => num % 2);
  const sum = odds.reduce((acc, cur) => acc + cur);
  console.log(sum);
  process.exit();
});
