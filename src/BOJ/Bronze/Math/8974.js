function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  const [A, B] = input.split(' ').map(Number);

  const list = [];
  for (let i = 1; i <= 1000; i++) {
    let count = i;
    while (count) {
      list.push(i);
      count--;
    }
  }
  let answer = 0;
  for (let i = A - 1; i <= B - 1; i++) {
    answer += list[i];
  }
  return answer;
}

console.log(solution());
