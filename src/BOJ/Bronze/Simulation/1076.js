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
  const color = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];
  const mul = [
    1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
  ];

  const sum1 = color.indexOf(input[0]);
  const sum2 = color.indexOf(input[1]);
  const idx = color.indexOf(input[2]);
  const mulVal = mul[idx];
  return Number(String(sum1) + String(sum2)) * mulVal;
}
console.log(solution());
