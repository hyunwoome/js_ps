// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on("line", function(line) {
  input.push(line);
  const [A, B] = input.shift().split(' ');
  for (let i = 0; i < B.length; i++) {
    if (!A.includes(B[i])) {
      console.log('NO');
      rl.close();
    }
  }
  console.log('YES');
}).on("close", function() {
  process.exit();
});