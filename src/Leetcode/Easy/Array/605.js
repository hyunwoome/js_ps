/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      n -= 1;
      flowerbed[i] = 1;
      if (n < 1) return true;
    }
  }
  return false;
};

const flowerbed = [1, 0, 1, 0, 1, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
