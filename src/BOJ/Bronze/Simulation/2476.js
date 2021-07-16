function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map((str) => {
      return str.split(' ');
    });

  const N = Number(input.shift().join(''));
  let max = -Infinity;
  input.forEach((dice) => {
    let obj = {};
    for (let i = 0; i < dice.length; i++) {
      obj[dice[i]] = obj[dice[i]] ? obj[dice[i]] + 1 : 1;
    }
    let high = -Infinity;
    for (let key in obj) {
      if (obj[key] === 3) {
        max = Math.max(max, 10000 + Number(key) * 1000);
      } else if (obj[key] === 2) {
        max = Math.max(max, 1000 + Number(key) * 100);
      } else {
        for (let key in obj) {
          high = Math.max(high, Number(key));
        }
        max = Math.max(max, high * 100);
      }
    }
  });
  console.log(max);
}

solution();
