/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  word = word.replace(/[^0-9]/g, ' ');
  const wordTransform = (word.match(/\S+/g) || []).map((str) => BigInt(str));
  return new Set(wordTransform).size;
};

const word = 'a1b01c001';
console.log(numDifferentIntegers(word));
