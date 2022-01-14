// 한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

// 여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 함수
function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .toString()
    .trim();
}

solution();
