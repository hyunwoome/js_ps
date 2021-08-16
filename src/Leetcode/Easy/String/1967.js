/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let answer = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) answer++;
  }
  return answer;
};

const patterns = ['a', 'b', 'c'];
const word = 'aaaaabbbbb';
console.log(numOfStrings(patterns, word));
