const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n');

// x1, y1, x2, y2

let arr = Array.from(Array(101).fill(false), () => new Array(101).fill(false));

for (let i = 0; i < 4; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map((x) => +x);

  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      arr[j][k] = true;
    }
  }
}

let answer = 0;
for (let i = 0; i <= 100; i++) {
  for (let j = 0; j <= 100; j++) {
    if (arr[i][j]) answer++;
  }
}

console.log(answer);
