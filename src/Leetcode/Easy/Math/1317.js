/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let i = 1;
  let j = n - 1;
  while (true) {
    if (String(j).includes('0') || String(i).includes('0')) {
      i++;
      j--;
    } else {
      return [i, j];
    }
  }
};

const n = 11;
console.log(getNoZeroIntegers(n));
