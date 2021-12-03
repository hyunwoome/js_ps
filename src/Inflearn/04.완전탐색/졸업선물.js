const solution = (arr) => {
  let answer = 0;
  const [student, budget] = arr.shift();
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < arr.length; i++) {
    let remain = budget - (arr[i][0] / 2 + arr[i][1]);
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] <= remain) {
        remain -= arr[j][0] + arr[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
};

const arr = [
  [5, 28],
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(arr));
