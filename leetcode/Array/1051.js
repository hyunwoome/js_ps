/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let originArr = heights.slice();
  let sortingArr = heights.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < sortingArr.length; i++) {
    if (originArr[i] !== sortingArr[i]) answer++;
  }
  return answer;
};

const heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));
