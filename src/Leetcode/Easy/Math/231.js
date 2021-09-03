/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  let power = 2;
  while (power < n) {
    power *= 2;
  }
  return power === n;
};

const n = 8;
console.log(isPowerOfTwo(n));
