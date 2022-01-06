function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = Number(input.shift());
  const matrix = input.map((el) => el.split(' '));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let isFound = false;
      for (let k = 0; k < matrix.length; k++) {
        if (i === k) continue;
        if (matrix[i][j] === matrix[k][j]) {
          matrix[k][j] = 0;
          isFound = true;
        }
      }
      if (isFound) matrix[i][j] = 0;
    }
    console.log(+matrix[i][0] + +matrix[i][1] + +matrix[i][2]);
  }
}

solution();
