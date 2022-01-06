function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const castle = input;
  let answer1 = 0;
  let isGuard = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (castle[i][j] === 'X') {
        isGuard = true;
        break;
      }
    }
    if (isGuard === false) answer1++;
    else isGuard = false;
  }

  let answer2 = 0;
  isGuard = false;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (castle[j][i] === 'X') {
        isGuard = true;
        break;
      }
    }
    if (isGuard === false) answer2++;
    else isGuard = false;
  }

  return Math.max(answer1, answer2);
}
console.log(solution());
