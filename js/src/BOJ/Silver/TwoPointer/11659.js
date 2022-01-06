function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/silver/twopointer/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);
  const numberArr = input.shift().split(' ').map(Number);

  // 구간합 구하는 방법
  const sum = new Array(numberArr.length + 1).fill(0);
  numberArr.forEach((v, i) => {
    sum[i + 1] = sum[i] + v;
  });
  //
  const answer = [];
  input.forEach((point) => {
    const [start, end] = point.split(' ').map(Number);
    // 1 3, 2 4, 5 5
    // [0, 5, 9, 12, 14, 15]
    // 1. 12 - 0 = 12
    // 2. 14 - 5 = 9
    // 3. 15 - 14 = 1
    answer.push(sum[end] - sum[start - 1]);
  });
  return answer.join('\n');
}

console.log(solution());
