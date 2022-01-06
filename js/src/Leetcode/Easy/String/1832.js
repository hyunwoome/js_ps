/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let set = new Set(sentence.split(''));
  return set.size === 26;
};

const sentence = 'thequickbrownfoxjumpsoverthelazydog';
console.log(checkIfPangram(sentence));
