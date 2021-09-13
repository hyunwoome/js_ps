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
  const str = input.shift();
  const findChar = input.shift();
  let answer = 0;
  for (const st of str) {
    if (st === findChar) answer++;
  }
  console.log(answer);
  process.exit();
});
