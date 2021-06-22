/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;
  while (n !== 1) {
    if (n % 2 !== 0) {
      matches += Math.floor(n / 2);
      n = Math.ceil(n / 2);
    } else {
      matches += n / 2;
      n /= 2;
    }
  }
  return matches;
};

const n = 14;
console.log(numberOfMatches(n));
