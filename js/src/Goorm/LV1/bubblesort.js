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
  let tmp = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  console.log(arr.join(' ') + ' ');
  process.exit();
});
