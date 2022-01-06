function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map((el) => el.split(' '));
  const [H, W] = input.shift();
  const block = input.shift().map((str) => Number(str));

  let answer = 0;

  for (let i = 1; i < block.length - 1; i++) {
    let current = block[i];
    let leftMax = current;
    let rightMax = current;
    for (let k = i - 1; k >= 0; k--) {
      if (block[k] > current) leftMax = Math.max(leftMax, block[k]);
    }
    for (let k = i + 1; k < block.length; k++) {
      if (block[k] > current) rightMax = Math.max(rightMax, block[k]);
    }
    if (Math.min(leftMax, rightMax) > current)
      answer += Math.min(leftMax, rightMax) - block[i];
  }
  console.log(answer);
}

solution();
