const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .split('\n')
  .map((el) => {
    return el.split(' ').map((str) => {
      return Number(str);
    });
  });

const TC = input.shift();

const arr = Array.from(Array(101), () => new Array(101));
for (let k = 0; k < input.length; k++) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arr[input[k][0] + i][input[k][1] + j] = 1;
    }
  }
}

let count = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr[i][j] === 1) count++;
  }
}
console.log(count);
