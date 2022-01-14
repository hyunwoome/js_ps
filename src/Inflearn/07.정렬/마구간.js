const count = (arr, dist) => {
  let cnt = 1;
  let ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
};

const solution = (n, c, arr) => {
  arr.sort((a, b) => a - b);
  let answer = 0;
  let lt = 1;
  let rt = arr[arr.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
};

const n = 5;
const c = 3;
const arr = [1, 2, 8, 4, 9];
console.log(solution(n, c, arr));
