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
  const [A, B] = input.shift().split(' ').map(Number);
  const aArr = input.shift().split(' ').map((Number));
  const bArr = input.shift().split(' ').map((Number));
  const compare = (a, b) => a - b;
  console.log([...aArr, ...bArr].sort(compare).join(' ') + ' ');
  process.exit();
});