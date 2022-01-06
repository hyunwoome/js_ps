function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split(' ')
    .map((el) => +el);
  function rev(x) {
    return Number(String(x).split('').reverse().join(''));
  }
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    answer += rev(input[i]);
  }
  console.log(rev(answer));
}
solution();
