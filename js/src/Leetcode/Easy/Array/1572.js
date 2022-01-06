/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let answer = 0;
  let len = mat.length;
  let j = len - 1;
  for (let i = 0; i < len; i++) {
    answer += mat[i][i];
    answer += mat[i][j];
    j--;
  }
  return len % 2
    ? answer - mat[Math.floor(len / 2)][Math.floor(len / 2)]
    : answer;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(diagonalSum(mat));
