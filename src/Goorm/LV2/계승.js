// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  const input = +line;
  const fact = (num) => {
    if (num === 0) return 1;
    else return num * fact(num - 1);
  };
  console.log(fact(input));
}).on("close", function () {
  process.exit();
});