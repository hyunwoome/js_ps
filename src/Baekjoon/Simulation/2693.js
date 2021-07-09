function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .split('\n')
    .map((el) => {
      return el.split(' ');
    });
  const N = input.shift();
  for (let i = 0; i < input.length; i++) {
    let sorting = input[i].sort((a, b) => b - a);
    console.log(parseInt(sorting[2]));
  }
}

solution();
