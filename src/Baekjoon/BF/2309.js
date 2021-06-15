const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let getAll = 0;

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  for (let i = 0; i < input.length; i++) {
    getAll += input[i];
  }

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (getAll - input[i] - input[j] === 100) {
        input.splice(i, 1);
        input.splice(j - 1, 1);
      }
    }
  }
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
  process.exit();
});
