const solution = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === undefined) result.push(arr[i]);
    if (arr[i - 1] < arr[i]) result.push(arr[i]);
  }
  return result;
};

const arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
