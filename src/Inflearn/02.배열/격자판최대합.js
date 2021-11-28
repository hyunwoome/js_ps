const solution = (matrix) => {
  let max = 0;
  let horizonal = 0;
  let vertical = 0;

  // horizonal
  for (let i = 0; i < matrix.length; i++) {
    horizonal = 0;
    vertical = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      horizonal += matrix[i][j];
      vertical += matrix[j][i];
    }
    max = Math.max(max, horizonal, vertical);
  }

  // diagonal
  let tmp1 = 0;
  let tmp2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    tmp1 += matrix[i][i];
    tmp2 += matrix[i][matrix.length - i - 1];
  }
  max = Math.max(max, tmp1, tmp2);

  return max;
};

const matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(matrix));
