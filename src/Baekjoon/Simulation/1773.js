function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const TC = input.shift();

  const [N, C] = TC.split(' ');
  const shot = input;
  const arr = Array(Number(C) + 1).fill(0);

  shot.forEach((sec) => {
    for (let i = 1; i < arr.length; i++) {
      if (sec * i <= C) arr[sec * i] = 1;
    }
  });
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) answer++;
  }
  console.log(answer);
}

solution();
