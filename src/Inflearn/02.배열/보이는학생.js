const solution = (arr) => {
  let height = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (height < arr[i]) {
      height = arr[i];
      result++;
    }
  }
  return result;
};

const arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
