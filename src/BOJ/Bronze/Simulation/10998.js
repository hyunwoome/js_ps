function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  let reverse = input.split('').reverse().join('');
  return input === reverse ? 1 : 0;
}
console.log(solution());
