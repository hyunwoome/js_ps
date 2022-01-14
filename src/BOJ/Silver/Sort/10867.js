function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/sort/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = Number(input.shift());
  const arr = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const set = new Set([...arr]);
  console.log(
    Array.from(set)
      .sort((a, b) => a - b)
      .join(' '),
  );
}

solution();
