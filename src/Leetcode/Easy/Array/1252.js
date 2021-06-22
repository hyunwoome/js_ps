/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let gridArray = new Array(m).fill(0).map(() => new Array(n).fill(0));
  indices.forEach((arr) => {
    let row = arr[0];
    let col = arr[1];

    // col
    for (let i = 0; i < m; i++) {
      gridArray[i][col]++;
    }
    // row
    for (let i = 0; i < n; i++) {
      gridArray[row][i]++;
    }
  });

  let answer = 0;
  for (let i = 0; i < gridArray.length; i++) {
    for (let j = 0; j < gridArray[i].length; j++) {
      if (gridArray[i][j] % 2) answer++;
    }
  }
  return answer;
};

const m = 2;
const n = 3;
const indices = [
  [0, 1],
  [1, 1],
];
console.log(oddCells(m, n, indices));
