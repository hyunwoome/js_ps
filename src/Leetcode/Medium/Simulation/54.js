/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let answer = [];
  if (matrix.length === 0) return answer;
  const R = matrix.length;
  const C = matrix[0].length;
  let seen = Array(R)
    .fill(false)
    .map(() => Array(C).fill(false));

  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];

  let row = 0;
  let col = 0;
  let di = 0;

  for (let i = 0; i < R * C; i++) {
    answer.push(matrix[row][col]);
    seen[row].splice(col, 1, true);
    let cr = row + dr[di];
    let cc = col + dc[di];
    if (0 <= cr && cr < R && 0 <= cc && cc < C && !seen[cr][cc]) {
      row = cr;
      col = cc;
    } else {
      di = (di + 1) % 4;
      row += dr[di];
      col += dc[di];
    }
  }
  return answer;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
