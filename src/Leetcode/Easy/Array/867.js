/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let answer = [...Array(matrix[0].length)].map(() =>
    Array(matrix.length).fill(0),
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      answer[j][i] = matrix[i][j];
    }
  }
  return answer;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transpose(matrix));
