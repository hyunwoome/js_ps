function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/queue/input', 'utf8')
    .trim()
    .toString()
    .split(' ');

  const [N, K] = input.map((el) => Number(el));

  let queue = [];
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  let answer = [];
  let i = 0;
  while (queue.length !== 0) {
    if (i < K - 1) {
      queue.push(queue.shift());
      i++;
    } else {
      answer.push(queue.shift());
      i = 0;
    }
  }
  console.log(`<${answer.join(', ')}>`);
}

solution();
