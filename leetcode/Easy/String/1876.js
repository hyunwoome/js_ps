/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  const len = s.length;

  let count = 0;
  for (let i = 0; i < len; i++) {
    if (!s[i + 1] || !s[i + 2]) break;
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2])
      count++;
  }
  return count;
};

const s = 'xyzzaz';
console.log(countGoodSubstrings(s));
