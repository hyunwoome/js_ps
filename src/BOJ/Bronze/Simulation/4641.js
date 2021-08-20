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

  for (let i = 0; i < input.length; i++) {
    let count = 0;
    let arr = input[i].split(' ').map(Number);
    if (arr[0] === -1) return;
    let double = [...arr].map((el) => el + el);

    for (let j = 0; j < double.length; j++) {
      if (double[j] === 0) continue;
      if (arr.includes(double[j])) count++;
    }
    console.log(count);
  }
}

solution();
