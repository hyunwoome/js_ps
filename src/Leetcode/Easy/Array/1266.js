/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let count = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let point0 = points[i];
    let point1 = points[i + 1];
    count += Math.max(
      Math.abs(point0[0] - point1[0]),
      Math.abs(point0[1] - point1[1]),
    );
  }
  return count;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];

console.log(minTimeToVisitAllPoints(points));
