// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  const answer = line;
  let result = 0;
  let sum = 0;
  for (const i of answer) {
    if (i === 'o') {
      sum++;
      result += sum;
    } else {
      sum = 0;
    }
  }
  console.log(result);
}).on("close", function() {
  process.exit();
});