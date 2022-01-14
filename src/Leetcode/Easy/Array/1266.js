/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let answer = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let pointsZero = Math.abs(points[i][0] - points[i + 1][0]);
    let pointsOne = Math.abs(points[i][1] - points[i + 1][1]);
    answer += Math.max(pointsZero, pointsOne);
  }
  return answer;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));
