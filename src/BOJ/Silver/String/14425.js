function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/string/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);
  let stringN = [];
  let stringM = [];
  for (let i = 0; i < N; i++) {
    stringN.push(input.shift());
  }
  for (let i = 0; i < M; i++) {
    stringM.push(input.shift());
  }
  let obj = {};
  for (let i = 0; i < stringN.length; i++) {
    obj[stringN[i]] = obj[stringN[i]] ? obj[stringN[i]] + 1 : 1;
  }
  let count = 0;
  for (let i = 0; i < stringM.length; i++) {
    if (obj[stringM[i]]) count++;
  }
  return count;
}

console.log(solution());
