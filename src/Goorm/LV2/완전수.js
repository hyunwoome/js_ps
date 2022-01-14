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
  const [a, b] = input[0].split(' ').map(Number);

  let tmp = 0;
  let sum = 0;
  let answer = [];
  // 1 ~ 100
  for (let i = a; i <= b; i++) {
    tmp = i;
    for (let j = 1; j <= i; j++) {
      if (tmp % j === 0) sum += j;
    }
    if (sum - i === i) answer.push(i);
    sum = 0;
  }
  console.log(answer.join(' ') + ' ');

  process.exit();
});
