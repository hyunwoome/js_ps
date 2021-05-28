/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let word1Str = word1.join('');
  let word2Str = word2.join('');
  if (word1Str === word2Str) return true;
  else return false;
};

const word1 = ['ab', 'c'];
const word2 = ['a', 'bc'];
console.log(arrayStringsAreEqual(word1, word2));
