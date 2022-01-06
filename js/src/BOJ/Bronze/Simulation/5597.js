function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';

  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map(Number);

  let checked = new Array(30).fill(false);
  for (let i = 0; i < input.length; i++) {
    checked.splice(input[i] - 1, 1, true);
  }

  for (let i = 0; i < checked.length; i++) {
    if (!checked[i]) console.log(i + 1);
  }
}

solution();
