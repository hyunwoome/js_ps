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
  const n = +input.shift();
  const nums = input.shift().split(' ').map(Number);
  const sum = nums.reduce((acc, cur) => acc + cur);
  const average = (sum / n).toFixed(1);
  const upToAverage = nums.filter(num => average < num);
  console.log(`${average} ${upToAverage.length}`);
  process.exit()
});