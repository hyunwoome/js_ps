function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/sort/input', 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map((el) => +el);

  let final = 0;
  let highScore = [];

  let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[input[i]] = i;
  }

  let arr = [];
  for (let i in obj) {
    arr.push([i, obj[i]]);
  }

  let sortable = arr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < 5; i++) {
    final += +sortable[i][0];
    highScore.push(sortable[i][1] + 1);
  }
  console.log(final);
  console.log(highScore.sort((a, b) => a - b).join(' '));
}

solution();
