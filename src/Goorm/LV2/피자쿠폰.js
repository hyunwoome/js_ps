// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input.shift().split(' ').map(Number);
  const rest = Math.floor(n / m);
  const total = Math.floor((n + rest) / m);
  console.log(n + total);
  process.exit();
});