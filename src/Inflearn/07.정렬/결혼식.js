const solution = (arr) => {
  let result = 0;
  const sortArr = arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortArr.length; i++) {
    const end = sortArr[i][1];
    let count = 0;
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j][0] <= end) count++;
    }
    result = Math.max(result, count);
  }
  return result;
};

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
