/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  indices.forEach((index) => {
    let row = index[0];
    let col = index[1];

    for (let i = 0; i < m; i++) {
      matrix[i][col]++;
    }
    for (let i = 0; i < n; i++) {
      matrix[row][i]++;
    }
  });

  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2) count++;
    }
  }
  return count;
};

const m = 2; // row
const n = 3; // col
const indices = [
  [0, 1],
  [1, 1],
];
console.log(oddCells(m, n, indices));
