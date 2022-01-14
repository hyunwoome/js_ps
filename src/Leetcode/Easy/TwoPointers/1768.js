/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let answer = '';
  if (word1.length > word2.length) {
    for (let i = 0; i < word1.length; i++) {
      if (word2[i] !== undefined) {
        answer += word1[i];
        answer += word2[i];
      } else {
        answer += word1[i];
      }
    }
  } else {
    for (let i = 0; i < word2.length; i++) {
      if (word1[i] !== undefined) {
        answer += word1[i];
        answer += word2[i];
      } else {
        answer += word2[i];
      }
    }
  }
  return answer;
};

const word1 = 'ab';
const word2 = 'pqrs';
console.log(mergeAlternately(word1, word2));
