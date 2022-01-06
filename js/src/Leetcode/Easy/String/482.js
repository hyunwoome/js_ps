/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let upper = s.toUpperCase();
  let removeDash = upper.replace(/-/g, '').split('');
  let answer = [];
  let count = 0;
  for (let i = removeDash.length - 1; i >= 0; i--) {
    if (count === k) {
      answer.unshift('-');
      count = 0;
    }
    answer.unshift(removeDash[i]);
    count++;
  }
  return answer.join('');
};

const s = '5F3Z-2e-9-w';
const k = 4;
console.log(licenseKeyFormatting(s, k));
