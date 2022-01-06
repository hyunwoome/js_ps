// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const num = +line;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  if (count === 2) {
    console.log('True');
  } else {
    console.log('False');
  }

  rl.close();
}).on('close', function () {
  process.exit();
});
