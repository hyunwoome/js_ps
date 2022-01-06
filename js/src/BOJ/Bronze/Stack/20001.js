function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/stack/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const start = input.shift();
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '문제') count++;
    else if (count === 0 && input[i] === '고무오리') count += 2;
    else if (count !== 0 && input[i] === '고무오리') count--;
    else break;
  }
  return count === 0 ? '고무오리야 사랑해' : '힝구';
}

console.log(solution());
