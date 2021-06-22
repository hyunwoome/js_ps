/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  function isValid(str) {
    for (let i = 0; i < str.length; i++) {
      if (!allowed.includes(str[i])) return false;
    }
    return true;
  }

  let answer = 0;
  for (let i = 0; i < words.length; i++) {
    if (isValid(words[i])) answer++;
  }
  return answer;
};

const allowed = 'ab';
const words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
console.log(countConsistentStrings(allowed, words));
