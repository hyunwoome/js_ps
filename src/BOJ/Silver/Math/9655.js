function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/math/input', 'utf8')
    .trim()
    .toString();

  if (+input % 2) console.log('SK');
  else console.log('CY');
}

solution();
