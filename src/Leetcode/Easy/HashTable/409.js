/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let answer = 0;
  let obj = {};

  for (const char of s) {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    if (obj[char] % 2 === 0) answer += 2;
  }
  return s.length > answer ? answer + 1 : answer;
};

const s = 'aaaaaabb';
console.log(longestPalindrome(s));
