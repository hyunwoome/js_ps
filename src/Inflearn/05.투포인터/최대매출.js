const solution = (n, arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length - 3; i++) {
    const tmp = arr[i] + arr[i + 1] + arr[i + 2];
    sum = Math.max(sum, tmp);
  }
  return sum;
};

const n = 3;
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(n, arr));
