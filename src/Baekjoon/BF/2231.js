const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;
let answer = [];

rl.on('line', (line) => {
  input = Number(line);
}).on('close', () => {
  for (let i = 1; i <= input; i++) {
    let sum = Number(i);
    let arr = i.toString().split('');
    for (let j = 0; j < arr.length; j++) {
      sum += Number(arr[j]);
    }
    if (sum === Number(input)) {
      answer.push(Number(arr.join('')));
      sum = Number(i);
      break;
    }
  }
  console.log(answer.length ? Math.min(...answer) : 0);
  process.exit();
});
