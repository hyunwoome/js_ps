function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/greedy/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = Number(input.shift());
  const date = input.shift().split(' ').map(Number);
  const sortingDate = date.sort((a, b) => b - a);
  let max = 0;
  for (let i = 0; i < sortingDate.length; i++) {
    max = Math.max(max, sortingDate[i] + i + 2);
  }
  return max;
}

console.log(solution());
