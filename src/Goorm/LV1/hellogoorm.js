// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  for (let i = 0; i < line; i++) {
    console.log('Hello Goorm !');
  }
}).on('close', function () {
  process.exit();
});
