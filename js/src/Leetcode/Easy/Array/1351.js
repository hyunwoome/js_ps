/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let i = 0;
  let j = n - 1;
  let answer = 0;

  while (j >= 0 && i < m) {
    if (grid[i][j] < 0) {
      answer += m - i;
      j--;
    } else {
      i++;
    }
  }
  return answer;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));
