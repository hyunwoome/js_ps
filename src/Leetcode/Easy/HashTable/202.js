/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split('')
    .reduce((acc, cur) => {
      return acc + Math.pow(cur, 2);
    }, 0);
}

const n = 19;
console.log(isHappy(n));
