function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  for (let i = 1; i < input.length; i++) {
    let a = input.substring(0, i);
    let b = input.substring(i);
    let first = 1;
    let second = 1;
    for (let j = 0; j < a.length; j++) first *= +a[j];
    for (let k = 0; k < b.length; k++) second *= +b[k];
    if (first === second) return 'YES';
  }
  return 'NO';
}

console.log(solution());
