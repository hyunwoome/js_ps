// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const solution = () => {
    const arr = input[0].split(' ').map(Number);
    const set = new Set(arr);
    if (set.size === 1 || set.size === 3) {
      return 0;
    }
    const obj = {
      1: 'scissors',
      2: 'rock',
      3: 'paper',
    };
    let winCount = 0;
    const newArr = Array.from(set);
    const a = obj[String(newArr[0])];
    const b = obj[String(newArr[1])];
    let winner = 0;
    if (
      (a === 'scissors' && b === 'paper') ||
      (a === 'paper' && b === 'scissors')
    )
      winner = 1;
    else if (
      (a === 'rock' && b === 'scissors') ||
      (a === 'scissors' && b === 'rock')
    )
      winner = 2;
    else if ((a === 'paper' && b === 'rock') || (a === 'rock' && b === 'paper'))
      winner = 3;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === winner) winCount++;
    }
    return winCount;
  };

  console.log(solution());
});
