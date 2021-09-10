// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let answer = 0;
  for (let i = 1; i < line; i++) {
    let str = String(i);
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '3' || str[j] === '6' || str[j] === '9') answer++;
    }
  }
  console.log(answer);

  rl.close();
}).on('close', function () {
  process.exit();
});
