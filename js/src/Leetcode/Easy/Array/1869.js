/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let longest1 = 0;
  let longest0 = 0;

  let count1 = 0;
  let count0 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') count1++;
    else count1 = 0;

    if (s[i] === '0') count0++;
    else count0 = 0;

    longest1 = Math.max(longest1, count1);
    longest0 = Math.max(longest0, count0);
  }

  return longest1 > longest0;
};

const s = '011000111';
console.log(checkZeroOnes(s));
