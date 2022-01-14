/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let bit = num.toString(2);
  let flipBit = '';
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === '1') flipBit += '0';
    else flipBit += '1';
  }
  return parseInt(flipBit, 2);
};

const num = 5;
console.log(findComplement(num));
