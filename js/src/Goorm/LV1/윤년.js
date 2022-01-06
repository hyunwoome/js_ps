// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const year = +line;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log('Leap Year');
  } else {
    console.log('Not Leap Year');
  }
}).on('close', function () {
  process.exit();
});
