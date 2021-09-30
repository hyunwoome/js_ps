// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const nums = +line;
  const arr = [];
  let count = 0;
  for (let i = 1; i <= nums * 2; i++) {
    if (i % 2) count += i;
  }
  let i = 1;
  while (count) {
    arr.push(i);
    i += 2;
    count--;
  }
  let result = 0;
  for (let i = arr.length - 1; i > arr.length - 4; i--) {
    result += arr[i];
  }
  console.log(result);
}).on('close', function () {
  process.exit();
});
