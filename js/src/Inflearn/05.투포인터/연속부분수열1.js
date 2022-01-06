const solution = (n, arr) => {
  let cnt = 0;
  let sum = arr[0];
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    if (sum < n) {
      sum += arr[p2];
      p2++;
    } else if (sum > n) {
      sum -= arr[p1];
      p1++;
    } else if (sum === n) {
      cnt++;
      sum -= arr[p1];
      p1++;
    }
  }
  return cnt;
};
const n = 6;
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(n, arr));
