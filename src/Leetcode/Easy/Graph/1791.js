/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let obj = {};
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j < edges[0].length; j++) {
      obj[edges[i][j]] = obj[edges[i][j]] ? obj[edges[i][j]] + 1 : 1;
    }
  }
  for (const key in obj) {
    if (obj[key] === edges.length) return key;
  }
};

const edges = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];
console.log(findCenter(edges));
