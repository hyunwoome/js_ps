/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) evenCount++;
    else oddCount++;
  }
  return Math.min(evenCount, oddCount);
};

const position = [1, 2, 2, 2, 2];
console.log(minCostToMoveChips(position));
