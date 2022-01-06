/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  const arr = [...nums];
  arr.sort((a, b) => a - b); // 1, 2, 2
  let max = arr.pop(); // 2
  let second = arr.pop(); // 2
  while (arr.length) {
    const least = arr.pop(); // 1
    if (least + second > max) return least + second + max;
    max = second;
    second = least;
  }
  return 0;
};

const nums = [2, 1, 2];
console.log(largestPerimeter(nums));
