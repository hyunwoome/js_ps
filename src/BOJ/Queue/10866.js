// boj 10866 (95) ('/dev/stdin')
// dequeue

const fs = require('fs').readFileSync('queue/input', 'utf8').trim().split('\n');
const N = fs.shift();
const splitted = fs.map((el) => el.split(' '));

const dequeue = [];

function pushFront(x) {
  return dequeue.unshift(x);
}

function pushBack(x) {
  return dequeue.push(x);
}

function popFront() {
  // 출력
  if (dequeue.length === 0) {
    return -1;
  } else {
    return dequeue.shift();
  }
}

function popBack() {
  // 출력
  if (dequeue.length === 0) {
    return -1;
  } else {
    return dequeue.pop();
  }
}

function size() {
  // 출력
  return dequeue.length;
}

function empty() {
  // 출력
  if (dequeue.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

function front() {
  // 출력
  if (dequeue.length === 0) {
    return -1;
  } else {
    return dequeue[0];
  }
}

function back() {
  // 출력
  if (dequeue.length === 0) {
    return -1;
  } else {
    return dequeue[dequeue.length - 1];
  }
}

let result = '';

for (let i = 0; i < splitted.length; i++) {
  if (splitted[i][0] === 'push_front') {
    pushFront(splitted[i][1]);
  } else if (splitted[i][0] === 'push_back') {
    pushBack(splitted[i][1]);
  } else if (splitted[i][0] === 'pop_front') {
    result += popFront() + '\n';
  } else if (splitted[i][0] === 'pop_back') {
    result += popBack() + '\n';
  } else if (splitted[i][0] === 'size') {
    result += size() + '\n';
  } else if (splitted[i][0] === 'empty') {
    result += empty() + '\n';
  } else if (splitted[i][0] === 'front') {
    result += front() + '\n';
  } else if (splitted[i][0] === 'back') {
    result += back() + '\n';
  }
}

console.log(result);
