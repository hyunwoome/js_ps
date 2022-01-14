function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/bf/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number); // 5 3
  const not = Array(N + 1)
    .fill(false)
    .map(() => Array(N + 1).fill(false));
  for (let i = 0; i < input.length; i++) {
    let inputs = input[i].split(' ');
    let a = inputs[0];
    let b = inputs[1];
    not[a][b] = true;
    not[b][a] = true;
  }

  let result = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      if (not[i][j]) continue;
      for (let k = j + 1; k <= N; k++) {
        if (!not[j][k] && !not[k][i]) result++;
      }
    }
  }
  return result;
}

console.log(solution());
