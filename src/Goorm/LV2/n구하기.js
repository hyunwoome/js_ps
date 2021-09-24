// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const num = +line;
  let current = 0;
  let i = 0;
  while (current < num) {
    i++;
    current += i;
  }
  console.log(i);
}).on('close', function () {
  process.exit();
});
