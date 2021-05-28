/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = s.replace(/[^a-z0-9]/gi, '');
  const lower = reg.toLowerCase();
  if (lower.length < 2) return true;
  if (lower.length % 2 === 0) {
    const left = lower.slice(0, lower.length / 2);
    const right = lower.slice(lower.length / 2, lower.length);
    const reverse = right.split('').reverse().join('');
    return left === reverse;
  } else {
    const left = lower.slice(0, Math.floor(lower.length / 2));
    const right = lower.slice(Math.floor(lower.length / 2) + 1, lower.length);
    const reverse = right.split('').reverse().join('');
    return left === reverse;
  }
};

const s = 'ab@a';
console.log(isPalindrome(s));
