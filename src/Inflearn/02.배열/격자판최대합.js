const solution = (matrix) => {
  let max = 0;

  // horizon
  for (let i = 0; i < matrix.length; i++) {
    let tmp = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      tmp += matrix[i][j];
    }
    max = Math.max(max, tmp);
  }

  // vertical
  for (let i = 0; i < matrix.length; i++) {
    let tmp = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      tmp += matrix[j][i];
    }
    max = Math.max(max, tmp);
  }

  // diagonal
  let tmp1 = 0;
  let tmp2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    tmp1 += matrix[i][i];
    tmp2 += matrix[i][matrix.length - i - 1];
  }
  return Math.max(max, tmp1, tmp2);
};

const matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(matrix));
