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
  const arr = input.shift().split(' ').map(Number);
  const range = input.shift().split(' ').map(Number);
  let [a, b] = range;
  let result = 0;
  for (let i = a - 1; i < b; i++) {
    result += arr[i];
  }
  console.log(result);
  process.exit();
});