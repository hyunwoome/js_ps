// boj 10845 (93) ('/dev/stdin')

const input = require('fs')
  .readFileSync('queue/input', 'utf8')
  .trim()
  .split('\n');

const N = Number(input.shift()); // 15
const splitted = input.map((el) => el.split(' '));
let queue = [];

function pushX(n) {
  return queue.push(n);
}

function pop() {
  if (queue.length === 0) {
    return -1;
  } else {
    return queue.shift();
  }
}

function size() {
  return queue.length;
}

function empty() {
  if (queue.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

function front() {
  if (queue.length !== 0) {
    return queue[0];
  } else {
    return -1;
  }
}

function back() {
  if (queue.length !== 0) {
    return queue[queue.length - 1];
  } else {
    return -1;
  }
}

let result = '';

for (let i = 0; i < N; i++) {
  if (splitted[i][0] === 'push') {
    pushX(splitted[i][1]);
  } else if (splitted[i][0] === 'pop') {
    result += pop() + '\n';
  } else if (splitted[i][0] === 'size') {
    result += size() + '\n';
  } else if (splitted[i][0] === 'front') {
    result += front() + '\n';
  } else if (splitted[i][0] === 'back') {
    result += back() + '\n';
  } else if (splitted[i][0] === 'empty') {
    result += empty() + '\n';
  }
}

console.log(result);
