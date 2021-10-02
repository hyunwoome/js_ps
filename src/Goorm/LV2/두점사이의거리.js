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
  const sqrt = Math.sqrt;
  const pow = Math.pow;
  const [x1, y1] = input.shift().split(' ').map(Number);
  const [x2, y2] = input.shift().split(' ').map(Number);
  const result = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
  console.log(result.toFixed(2));
  process.exit();
});
