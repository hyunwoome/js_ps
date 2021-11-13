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
  const nums = input.shift().split(' ').map(Number);
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  for (const i in obj) {
    if (obj[i] === 1) {
      console.log(i);
      break;
    }
  }
  process.exit();
});