// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function (line) {
  const input = +line;

  const getCount = (n) => {
    let result = 0;
    let num = 2;

    while (num <= n) {
      for (let i = 2; i <= n; i++) {
        if (num % i === 0 && i !== num) break;
        if (num % i === 0 && i === num) result++;
      }
      num++;
    }
    return result;
  }

  console.log(getCount(input));

}).on("close", function () {
  process.exit();
});