/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let cur = 1;
  let pre = 0;
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) cur++;
    else {
      result += Math.min(cur, pre);
      pre = cur;
      cur = 1;
    }
  }
  return result + Math.min(cur, pre);
};

const s = '00110011';
console.log(countBinarySubstrings(s));
