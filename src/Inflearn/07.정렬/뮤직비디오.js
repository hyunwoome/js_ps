const count = (songs, capacity) => {
  let cnt = 1;
  let sum = 0;
  for (let i = 0; i < songs.length; i++) {
    if (sum + songs[i] > capacity) {
      cnt++;
      sum = songs[i];
    } else sum += songs[i];
  }
  return cnt;
};

const solution = (n, m, arr) => {
  let answer = 0;
  let lt = Math.max(...arr); // 9
  let rt = arr.reduce((a, b) => a + b, 0); // 45
  while (lt <= rt) {
    // 9 <= 45
    let md = parseInt((lt + rt) / 2); // 27
    if (count(arr, md) <= m) {
      answer = md;
      rt = md - 1;
    } else lt = md + 1;
  }
  return answer;
};

const n = 9;
const m = 3;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(n, m, arr));
