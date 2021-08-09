function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/sort/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const X = input.shift();
  const arr = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const set = new Set(arr);
  const newArr = Array.from(set);
  const sortingArr = newArr.sort((a, b) => a - b);

  const hash = new Map();
  for (let i = 0; i < sortingArr.length; i++) {
    hash.set(sortingArr[i], i);
  }
  const answer = [];
  for (let i = 0; i < X; i++) {
    answer.push(hash.get(arr[i]));
  }
  return answer.join(' ');
}

console.log(solution());
function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/sort/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const X = input.shift();
  const arr = input.shift().split(' ').map(Number);
  const set = new Set(arr);
  const newArr = Array.from(set);
  const sortingArr = newArr.sort((a, b) => a - b);

  const hash = new Map();
  for (let i = 0; i < sortingArr.length; i++) {
    hash.set(sortingArr[i], i);
  }
  const answer = [];
  for (let i = 0; i < X; i++) {
    answer.push(hash.get(arr[i]));
  }
  return answer.join(' ');
}

console.log(solution());
