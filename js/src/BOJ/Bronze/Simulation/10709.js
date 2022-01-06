function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [H, W] = input.shift().split(' ');
  const JOI = input.map((str) => str.split(''));
  let arr = Array(Number(H))
    .fill(-1)
    .map(() => {
      return Array(Number(W)).fill(-1);
    });

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (JOI[i][j] === 'c') arr[i][j] = 0;
      else arr[i][j] = -1;
    }
  }

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (arr[i][j] === 0) {
        let count = 1;
        for (let k = j + 1; k < W; k++) {
          if (arr[i][k] === -1) arr[i][k] = count++;
          else break;
        }
      }
    }
  }

  for (let i = 0; i < H; i++) {
    console.log(arr[i].join(' '));
  }
}

solution();
