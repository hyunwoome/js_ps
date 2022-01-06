// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const kw = +line;
  let answer = 0;
  if (kw < 100) answer = (kw * 0.5) / 100;
  else if (kw < 200) answer = (kw * 0.7) / 100;
  else if (kw < 300) answer = (kw * 0.9) / 100;
  else answer = kw / 100;
  console.log(answer.toFixed(2));
}).on('close', function () {
  process.exit();
});
