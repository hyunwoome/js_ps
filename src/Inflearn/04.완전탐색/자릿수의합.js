const solution = (arr) => {
  let max = 0;
  let element = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = String(arr[i])
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur);
    if (max < sum) {
      max = sum;
      element = arr[i];
    }
    if (max === sum && element < arr[i]) {
      element = arr[i];
    }
  }
  return element;
};
// max = 0 => 11 => 11
// 11, 10, 9, 4, 8, 11, 6
const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
