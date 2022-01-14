// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let str = '';
  for (let i = 1; i <= 5; i++) {
    str += String(i);
    console.log(str.padStart(8, 0));
  }
}).on('close', function () {
  process.exit();
});
