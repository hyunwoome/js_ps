function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/bs/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  let N = Number(input.shift());
  const nth = input
    .shift()
    .split(' ')
    .map((el) => Number(el));

  const M = Number(input.shift());
  const mth = input
    .shift()
    .split(' ')
    .map((el) => Number(el));

  const sorting = nth.sort((a, b) => a - b);

  function binarySearch(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid = 0;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (arr[mid] === num) return 1;
      else if (arr[mid] > num) high = mid - 1;
      else if (arr[mid] < num) low = mid + 1;
    }
    return 0;
  }

  for (let i = 0; i < mth.length; i++) {
    console.log(binarySearch(sorting, mth[i]));
  }
}

solution();
