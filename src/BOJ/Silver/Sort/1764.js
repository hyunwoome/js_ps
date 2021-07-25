function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/sort/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input
    .shift()
    .split(' ')
    .map((el) => +el);

  const noListen = [];
  const noSee = [];

  for (let i = 0; i < N; i++) {
    noListen.push(input[i]);
  }
  for (let i = N; i < N + M; i++) {
    noSee.push(input[i]);
  }

  const answer = [];
  const duplicatedArr = [...noListen, ...noSee].sort();
  for (let i = 0; i < duplicatedArr.length - 1; i++) {
    if (duplicatedArr[i] === duplicatedArr[i + 1])
      answer.push(duplicatedArr[i]);
  }

  console.log(answer.length);
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}
solution();
