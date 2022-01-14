/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const availableEatCandies = candyType.length / 2;
  const set = new Set(candyType);
  return availableEatCandies <= set.size ? availableEatCandies : set.size;
};

const candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType));
