function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/sort/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const T = Number(input.shift());
  for (let i = 0; i < T; i++) {
    const N = Number(input.shift());
    let max = '';
    let val = 0;
    for (let i = 0; i < N; i++) {
      let [univ, liquor] = input.shift().split(' ');
      if (+liquor >= val) {
        val = +liquor;
        max = univ;
      }
    }
    console.log(max);
  }
}

solution();
