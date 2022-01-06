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
  const result = [];
  for (let i = a; i <= b; i++) {
    let normalNumber = i;
    let sum = 0;
    for (let j = 0; j < String(i).length; j++) {
      sum += +String(i)[j] * +String(i)[j] * +String(i)[j];
    }
    if (sum === normalNumber) result.push(sum);
  }
  console.log(result.join(' ') + ' ');
  process.exit();
});
