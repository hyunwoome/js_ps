/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let base = n
    .toString(k)
    .split('')
    .map((el) => parseInt(el));
  return base.reduce((acc, cur) => acc + cur);
};

const n = 34;
const k = 6;
console.log(sumBase(n, k));
