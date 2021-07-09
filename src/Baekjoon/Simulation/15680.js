function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString();

  if (input === '0') console.log('YONSEI');
  else console.log('Leading the Way to the Future');
}

solution();
