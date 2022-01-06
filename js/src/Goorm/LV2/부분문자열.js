// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let answer = [];
  let j = 0;
  while (j < line.length) {
    let sum = '';
    for (let i = 0; i <= j; i++) {
      sum += line[i];
    }
    answer.push(sum);
    j++;
  }
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}).on('close', function () {
  process.exit();
});
