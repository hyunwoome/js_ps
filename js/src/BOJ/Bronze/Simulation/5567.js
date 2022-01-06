function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = input.shift(); // 동기 수
  const M = input.shift(); // 리스트의 길이
  // 동기와의 관계
  let list = input.map((el) => {
    return el.split(' ');
  });

  let arr = Array(501)
    .fill(0)
    .map(() => Array(501).fill(0));
  let check = Array(501).fill(0);
  let count = 0;

  for (let i = 0; i < M; i++) {
    let a = list[i][0];
    let b = list[i][1];
    arr[a][b] = 1;
    arr[b][a] = 1;
  }

  for (let i = 2; i <= N; i++) {
    if (arr[1][i]) {
      check[i] = 1;
      for (let j = 2; j <= N; j++) {
        if (arr[i][j] === 1) check[j] = 1;
      }
    }
  }

  for (let i = 2; i <= N; i++) {
    if (check[i] === 1) count++;
  }
  console.log(count);
}

solution();
