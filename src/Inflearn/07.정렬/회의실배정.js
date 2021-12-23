const solution = (arr) => {
  let result = 0;
  let et = 0;
  const originArr = [...arr];
  const sortArr = [...arr].sort((a, b) => a[1] - b[1]);

  const isEqualArray = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i][0] !== arr2[i][0] || arr1[i][1] !== arr2[i][1]) {
        return false;
      }
    }
    return true;
  };

  if (isEqualArray(originArr, sortArr)) {
    const newArr = [...arr].sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < newArr.length; i++) {
      if (et <= newArr[i][0]) {
        result++;
        et = newArr[i][1];
      }
    }
  } else {
    for (let i = 0; i < sortArr.length; i++) {
      if (et <= sortArr[i][0]) {
        result++;
        et = sortArr[i][1];
      }
    }
  }
  return result;
};

const arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
