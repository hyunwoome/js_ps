/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xBit = x.toString(2);
  let yBit = y.toString(2);
  let count = 0;

  if (xBit.length > yBit.length) yBit = yBit.padStart(xBit.length, 0);
  else xBit = xBit.padStart(yBit.length, 0);

  for (let i = 0; i < xBit.length; i++) {
    if (xBit[i] !== yBit[i]) count++;
  }
  return count;
};

const x = 1;
const y = 4;
console.log(hammingDistance(x, y));
