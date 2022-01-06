/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= maxCandies);
};

const candies = [12, 1, 12];
const extraCandies = 10;
console.log(kidsWithCandies(candies, extraCandies));
