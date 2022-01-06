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
  const n = +input.shift();
  const nums = input.map(Number);
  let count = 0;
  for (const num of nums) {
    if (num === 1) count++;
    else if (Number.isInteger(Math.sqrt(num))) count++;
  }
  console.log(count);
  process.exit();
});