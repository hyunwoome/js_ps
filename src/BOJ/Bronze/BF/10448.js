const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  input.shift();
  let triNumber = [];
  for (let i = 1; i < 1000; i++) {
    triNumber.push((i * (i + 1)) / 2);
  }

  for (let i = 0; i < input.length; i++) {
    if (isTriNum(Number(input[i]), triNumber)) {
      console.log(1);
    } else {
      console.log(0);
    }
  }

  process.exit();
});

function isTriNum(n, triNums) {
  for (let i = 0; i < triNums.length; i++) {
    for (let j = 0; j < triNums.length; j++) {
      for (let k = 0; k < triNums.length; k++) {
        if (n === triNums[i] + triNums[j] + triNums[k]) {
          return true;
        }
      }
    }
  }
  return false;
}
