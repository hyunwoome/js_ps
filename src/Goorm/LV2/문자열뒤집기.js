// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(line.split('').reverse().join(''));
}).on('close', function () {
  process.exit();
});
