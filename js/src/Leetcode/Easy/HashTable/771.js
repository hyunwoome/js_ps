/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let val of stones) {
    if (jewels.includes(val)) {
      count++;
    }
  }
  return count;
};

const jewels = 'aA';
const stones = 'aAAbbbb';
console.log(numJewelsInStones(jewels, stones));
