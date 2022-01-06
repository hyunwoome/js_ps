function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/string/input', 'utf8')
    .trim()
    .toString();
  const cambridge = 'CAMBRIDGE';
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    if (!cambridge.includes(input[i])) {
      answer += input[i];
    }
  }
  console.log(answer);
}

solution();
