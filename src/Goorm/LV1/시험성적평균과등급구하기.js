// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const [korean, math, english] = line.split(' ').map(Number);
  const average = ((korean + math + english) / 3).toFixed(2);
  let level = '';
  if (average >= 90) level = 'A';
  else if (average < 90 && average >= 80) level = 'B';
  else if (average < 80 && average >= 70) level = 'C';
  else if (average < 70 && average >= 60) level = 'D';
  else level = 'F';
  console.log(`${average} ${level}`);
  rl.close();
}).on('close', function () {
  process.exit();
});
