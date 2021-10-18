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
  const [principal, interest, years] = input.shift().split(' ').map(Number);
  let repayment = principal;
  let count = 0;
  while (count < years) {
    repayment += repayment * (interest / 100)
    count++;
  }
  console.log(repayment.toFixed(2));
  process.exit();
});