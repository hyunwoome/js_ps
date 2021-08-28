function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/greedy/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  let sum = 0;
  let num = 1;
  let count = 0;

  while (true) {
    sum += num;
    count++;
    if (sum > +input) {
      count--;
      break;
    }
    num++;
  }
  return count;
}

console.log(solution());
