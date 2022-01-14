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
  const count = +input.shift();
  const timeToEat = input.shift().split(' ').map(Number);
  const timeToWarm = input.shift().split(' ').map(Number);
  const totalTimeToWarm = timeToWarm.reduce((acc, cur) => acc + cur);
  const minTImeToEat = Math.min(...timeToEat);
  console.log(totalTimeToWarm + minTImeToEat);
  process.exit();
});