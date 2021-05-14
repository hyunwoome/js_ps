/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let num = n;
  let matches = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      matches += num / 2;
      num = num - num / 2;
    } else {
      matches += parseInt(num / 2);
      num = num - parseInt(num / 2);
    }
  }
  return matches;
};

const n = 7;
console.log(numberOfMatches(n));
