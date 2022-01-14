// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const price = +line;
  const answer = Array(4).fill(0);
  let rest = 1000 - price;

  while (rest) {
    if (rest >= 500) {
      rest -= 500;
      answer[0]++;
    } else if (rest >= 100) {
      rest -= 100;
      answer[1]++;
    } else if (rest >= 50) {
      rest -= 50;
      answer[2]++;
    } else {
      rest -= 10;
      answer[3]++;
    }
  }
  console.log(answer.join(' ') + ' ');
}).on('close', function () {
  process.exit();
});
