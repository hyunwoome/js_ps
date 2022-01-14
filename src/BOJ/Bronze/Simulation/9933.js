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
  const N = +input.shift();
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    let reverse = input[i].split('').reverse().join('');
    for (let j = 0; j < input.length; j++) {
      if (reverse === input[j]) answer = input[j];
    }
  }
  return `${answer.length} ${answer[Math.floor(answer.length / 2)]}`;
}

console.log(solution());
