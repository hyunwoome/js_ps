/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let sum = '';
  for (let i = 0; i < words.length; i++) {
    sum += words[i];
    if (s === sum) return true;
  }
  return false;
};

const s = 'iloveleetcode';
const words = ['apples', 'i', 'love', 'leetcode'];
console.log(isPrefixString(s, words));
