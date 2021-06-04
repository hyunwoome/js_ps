/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let min = Infinity;
  let idx = -1;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      const dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      if (points[i][0] === x || points[i][1] === y) {
        if (dist < min) {
          idx = points.indexOf(points[i]);
          min = dist;
        }
      }
    }
  }
  return idx;
};

// [x, y]
const x = 3;
const y = 4;
const points = [
  [2, 3],
  [1, 5],
  [3, 6],
];
console.log(nearestValidPoint(x, y, points));
