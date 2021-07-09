function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map((el) => Number(el));

  const [N, M] = input;
  let perfectSquare = [];
  for (let i = N; i <= M; i++) {
    let sqrt = Math.sqrt(i);
    if (Number.isInteger(sqrt)) perfectSquare.push(i);
  }
  if (perfectSquare.length) {
    console.log(perfectSquare.reduce((acc, cur) => acc + cur));
    console.log(Math.min(...perfectSquare));
  } else {
    console.log(-1);
  }
}

solution();
