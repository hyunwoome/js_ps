function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);

  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < N; i++) {
    arr1.push(input.shift().split(' ').map(Number));
  }
  for (let i = 0; i < N; i++) {
    arr2.push(input.shift().split(' ').map(Number));
  }

  for (let i = 0; i < N; i++) {
    let arr = [];
    for (let j = 0; j < M; j++) {
      arr.push(arr1[i][j] + arr2[i][j]);
    }
    console.log(arr.join(' '));
  }
}

solution();
