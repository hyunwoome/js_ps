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
  let answer = 0;
  for (let i = a; i <= b; i++) {
    let mul = 1;
    for (let j = 0; j < String(i).length; j++) {
      mul *= Number(String(i)[j]);
    }
    answer += mul;
  }
  console.log(answer);
  process.exit();
});
