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
  const count = Number(input.shift()) - 1;
  const result =
    input
      .shift()
      .split(' ')
      .map(Number)
      .reduce((acc, cur) => acc + cur) - count;
  console.log(result);
  process.exit();
});
