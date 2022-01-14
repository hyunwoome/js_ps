// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  let i = 0;
  let j = line.length - 1;
  const result = [];
  while (i <= j) {
    if (i === j) {
      result.push(line[i]);
      break;
    }
    result.push(line[i]);
    result.push(line[j]);
    i++;
    j--;
  }
  console.log(result.join(''));
}).on("close", function() {
  process.exit();
});