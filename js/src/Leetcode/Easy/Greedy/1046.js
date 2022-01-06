/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    console.log(stones);
    stones.sort((a, b) => b - a);
    stones.push(Math.abs(stones.shift() - Math.abs(stones.shift())));
  }
  return stones[0];
};

const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones));
