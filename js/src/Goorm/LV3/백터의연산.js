// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  const [x1, y1] = input.shift().split(' ').map(Number);
  const [x2, y2] = input.shift().split(' ').map(Number);
  const operator = input.shift();
  if (operator === '+') {
    const x = x1 + x2;
    const y = y1 + y2;
    console.log(`${x.toFixed(2)} ${y.toFixed(2)}`);
  } else {
    const x = x1 - x2;
    const y = y1 - y2;
    console.log(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  process.exit();
});