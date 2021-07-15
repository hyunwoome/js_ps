/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let row = mat.length;
  let col = mat[0].length;
  let result = [];

  if (row * col !== r * c) return mat;

  let flat = [];
  for (let i = 0; i < mat.length; i++) {
    let current = mat[i];
    for (let j = 0; j < current.length; j++) {
      flat.push(current[j]);
    }
  }
  for (let i = 0; i < r; i++) {
    let column = flat.splice(0, c);
    result.push(column);
  }
  return result;
};

const mat = [
  [1, 2],
  [3, 4],
];
const r = 1;
const c = 4;
console.log(matrixReshape(mat, r, c));
