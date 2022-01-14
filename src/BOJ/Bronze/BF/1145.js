function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/bf/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split(' ')
    .map((el) => +el);
  const getCount = (n) => {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (n % input[i] === 0) count++;
    }
    return count;
  };

  let answer = 1;
  while (getCount(answer) < 3) answer++;

  return answer;
}
console.log(solution());
