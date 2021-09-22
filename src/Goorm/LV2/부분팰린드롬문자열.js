// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const solution = (line) => {
    for (let i = line.length; i > 1; i--) {
      for (let start = 0; start + i <= line.length; start++) {
        let check = true;
        for (let j = 0; j < i / 2; j++) {
          if (line[start + j] !== line[start + i - j - 1]) {
            check = false;
            break;
          }
        }
        if (check) return i;
      }
    }
    return 1;
  };
  console.log(solution(line));
}).on('close', function () {
  process.exit();
});
