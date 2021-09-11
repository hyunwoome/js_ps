// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const arr = input[0].split(' ');
  let answer = 0;
  for (const word of arr) {
    if (word === '') continue;
    else answer++;
  }
  console.log(answer);
  process.exit();
});
