const solution = (arr) => {
  let result = 0;
  let tmp = 0;
  for (const i of arr) {
    if (i === 1) {
      tmp++;
      result += tmp;
    } else {
      tmp = 0;
    }
  }
  return result;
};

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
