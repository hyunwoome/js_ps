/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const arr = mat.flat();
  if (r * c !== arr.length) return mat;
  const result = [];
  while (arr.length) result.push(arr.splice(0, c));
  return result;
};

const mat = [
  [1, 2],
  [3, 4],
];
const r = 1; // rows
const c = 4; // columns
console.log(matrixReshape(mat, r, c));
