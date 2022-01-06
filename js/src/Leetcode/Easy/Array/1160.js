/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const includeChar = (word) => {
    let str = chars;
    for (const char of word) {
      if (str.includes(char)) {
        str = str.replace(char, '');
      } else {
        return false;
      }
    }
    return true;
  };
  let answer = 0;
  for (const word of words) {
    includeChar(word) ? (answer += word.length) : 0;
  }
  return answer;
};

const words = ['cat', 'bt', 'hat', 'tree'];
const chars = 'atach';
console.log(countCharacters(words, chars));
