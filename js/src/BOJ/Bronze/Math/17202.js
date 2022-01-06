function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [A, B] = input;
  let merged = '';
  for (let i = 0; i < A.length; i++) {
    merged += A[i];
    merged += B[i];
  }

  let str = merged;
  while (str.length !== 2) {
    let newStr = '';
    for (let i = 0; i < str.length - 1; i++) {
      let sum = +str[i] + +str[i + 1];
      newStr += String(sum % 10);
    }
    str = newStr;
  }
  return str;
}

console.log(solution());
