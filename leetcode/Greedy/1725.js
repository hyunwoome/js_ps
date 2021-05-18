/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let minVal = [];
  rectangles.forEach((el) => {
    minVal.push(Math.min(...el));
  });
  let count = 0;
  let maxVal = Math.max(...minVal);
  for (let i = 0; i < minVal.length; i++) {
    if (minVal[i] === maxVal) count++;
  }
  return count;
};

const rectangles = [
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
];

console.log(countGoodRectangles(rectangles));
