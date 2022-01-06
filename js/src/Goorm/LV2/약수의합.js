// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const num = +line;
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (!(num % i)) answer += i;
  }
  console.log(answer);
  rl.close();
}).on('close', function () {
  process.exit();
});
