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
  let [a, b] = input.shift().split(' ').map(Number);
  let tmp = 0;
  let num = 0;
  if (a < b) {
    tmp = a;
    a = b;
    b = tmp;
  }

  while (b) {
    num = a % b;
    a = b;
    b = num;
  }
  console.log(a);

  process.exit();
});