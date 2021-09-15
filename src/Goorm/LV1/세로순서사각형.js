// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const num = +line;
  const arr = Array(num)
    .fill()
    .map(() => Array(num).fill());
  let inc = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[j][i] = inc += 1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' ') + ' ');
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
