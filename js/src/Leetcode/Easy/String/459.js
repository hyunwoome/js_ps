/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let median = Math.floor(s.length / 2); // 6
  let current = '';
  let multiple = 0;
  for (let i = 1; i <= median; i++) {
    current = s.slice(0, i);
    multiple = Math.floor(s.length / current.length);
    if (current.repeat(multiple) === s) {
      return true;
    }
  }
  return false;
};

const s = 'abcabcabcabc';
console.log(repeatedSubstringPattern(s));
