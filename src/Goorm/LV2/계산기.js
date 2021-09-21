// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
  const arr = input[0].split(' ');
  const a = +arr[0];
  const op = arr[1];
  const b = +arr[2];
  if (op === '+') console.log(a + b);
  else if (op === '-') console.log(a - b);
  else if (op === '*') console.log(a * b);
  else console.log((a / b).toFixed(2));
  rl.close();
}).on('close', function () {
  process.exit();
});
