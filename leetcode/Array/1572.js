/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let j = mat[0].length - 1; // 2

  for (let i = 0; i < mat.length; i++, j--) {
    if (i !== j) {
      sum += mat[i][j];
    }
    sum += mat[i][i];
  }
  return sum;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
