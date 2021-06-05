/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const arr = grid.flat();
  const len = grid[0].length;
  const answer = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    answer.push(arr.splice(0, len));
  }
  return answer;
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const k = 1;
console.log(shiftGrid(grid, k));
