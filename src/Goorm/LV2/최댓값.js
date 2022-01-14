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
  const num = +input.shift();
  const arr = input.shift().split(' ').map(Number);
  let max = Number.MIN_SAFE_INTEGER;
  let index = 0;

  for (let i = 0; i < num; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i + 1;
    }
  }
  console.log(max, index);
  process.exit();
});
