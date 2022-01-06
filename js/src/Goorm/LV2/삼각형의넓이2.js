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
  const [a, b, c] = input.shift().split(' ').map(Number);
  const s = (a + b + c) / 2;
  const tmp = s * (s - a) * (s - b) * (s - c);
  console.log(Math.sqrt(tmp).toFixed(2));
  process.exit();
});