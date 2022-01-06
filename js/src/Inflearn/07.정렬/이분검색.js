const solution = (n, m, arr) => {
  const sortArr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sortArr.length - 1;
  let mid = Math.round((left + right) / 2);
  while (left <= right) {
    if (m < sortArr[mid]) {
      right = mid;
      mid = (left + right) / 2;
    } else if (m > sortArr[mid]) {
      left = mid;
      mid = (left + right) / 2;
    } else return mid + 1;
  }
};

const n = 8;
const m = 32;
const arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(n, m, arr));
