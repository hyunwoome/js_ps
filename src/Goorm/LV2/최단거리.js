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
  const nums = +input.shift();
  const arr = input.shift().split(' ').map(Number);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums - 1; i++) {
    for (let j = i + 1; j < nums; j++) {
      min = Math.min(Math.abs(arr[i] - arr[j]), min);
    }
  }
  console.log(min);
  process.exit();
});
