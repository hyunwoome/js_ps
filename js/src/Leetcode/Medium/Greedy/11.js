/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity;
  let contain = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    if (height[i] > height[j]) {
      contain = height[j] * (j - i);
      j--;
    } else {
      contain = height[i] * (j - i);
      i++;
    }
    max = Math.max(max, contain);
  }
  return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
