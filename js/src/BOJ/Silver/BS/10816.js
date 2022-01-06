function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/bs/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  const N = input.shift();
  const Nth = input
    .shift()
    .split(' ')
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  const M = input.shift();
  const Mth = input
    .shift()
    .split(' ')
    .map((el) => Number(el));

  function lowerBound(arr, target) {
    let mid = 0;
    let start = 0;
    let end = arr.length - 1;

    while (end > start) {
      mid = Math.floor((start + end) / 2);
      if (arr[mid] >= target) end = mid;
      else start = mid + 1;
    }
    return end;
  }

  function upperBound(arr, target) {
    let mid = 0;
    let start = 0;
    let end = arr.length - 1;

    while (end > start) {
      mid = Math.floor((start + end) / 2);
      if (arr[mid] > target) end = mid;
      else start = mid + 1;
    }
    return end;
  }
  let answer = [];
  let lower;
  let upper;
  for (let i = 0; i < Mth.length; i++) {
    lower = lowerBound(Nth, Mth[i]);
    upper = upperBound(Nth, Mth[i]);
    if (upper === Nth.length - 1 && Nth[Nth.length - 1] === Mth[i]) {
      upper++;
    }
    answer.push(upper - lower);
  }
  console.log(answer.join(' '));
}

solution();

// lower bound: 찾고자 하는 값이 처음 나오는 인덱스
// upper bound: 찾고하 하는 값보다 큰 값이 처음으로 나오는 인덱스
// upper - lower: 찾고자 하는 수의 개수
