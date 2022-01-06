const solution = (arr) => {
  let result = 0;
  const len = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let flag = 1;
      for (let k = 0; k < dx.length; k++) {
        let nx = i + dx[k]; // row
        let ny = j + dy[k]; // column
        let point = arr[i][j];

        if (arr[nx] !== undefined) {
          let border = arr[nx][ny];
          if (border >= point) {
            flag = 0;
            break;
          }
        }
      }
      if (flag) result++;
    }
  }
  return result;
};

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
