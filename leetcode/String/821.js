/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let n = s.length;
  let result = [];
  let prev = Infinity;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    result[i] = Math.abs(prev - i);
  }

  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    result[i] = Math.min(result[i], prev - i);
  }
  return result;
};

const s = 'loveleetcode';
const c = 'e';
console.log(shortestToChar(s, c));
