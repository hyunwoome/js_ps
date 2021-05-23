/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let value = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        value++;
      }
    }
    arr.push(value);
    value = 0;
  }

  let obj = { ...arr };
  let sorting = Object.keys(obj).sort((a, b) => {
    return obj[a] - obj[b];
  });
  return sorting.slice(0, k).map((el) => parseInt(el));
};

const mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

const k = 3;
console.log(kWeakestRows(mat, k));
