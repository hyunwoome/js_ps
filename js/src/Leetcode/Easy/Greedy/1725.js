/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let arr = [];
  rectangles.forEach((rec) => {
    arr.push(Math.min(...rec));
  });
  let maxLen = Math.max(...arr);
  let answer = 0;
  arr.map((num) => {
    if (num === maxLen) answer++;
  });
  return answer;
};

const rectangles = [
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
];
console.log(countGoodRectangles(rectangles));
