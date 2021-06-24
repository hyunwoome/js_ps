/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sortArr = heights.slice().sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== heights[i]) answer++;
  }
  return answer;
};

const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));
