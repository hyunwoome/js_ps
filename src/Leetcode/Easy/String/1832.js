/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const answer = [];
  for (const char of alphabet) {
    if (!sentence.includes(char)) answer.push(char);
  }
  return answer.length ? false : true;
};

const sentence = 'thequickbrownfoxjumpsoverthelazydog';
console.log(checkIfPangram(sentence));
