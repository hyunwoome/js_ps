/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const alphabet = 'abcdefghij';
  let firstSum = '';
  let secondSum = '';
  let target = '';
  for (let i = 0; i < firstWord.length; i++) {
    const index = alphabet.indexOf(firstWord[i]);
    firstSum += index;
  }
  for (let i = 0; i < secondWord.length; i++) {
    const index = alphabet.indexOf(secondWord[i]);
    secondSum += index;
  }
  for (let i = 0; i < targetWord.length; i++) {
    const index = alphabet.indexOf(targetWord[i]);
    target += index;
  }
  return Number(firstSum) + Number(secondSum) === Number(target) ? true : false;
};

const firstWord = 'acb';
const secondWord = 'cba';
const targetWord = 'cdb';
console.log(isSumEqual(firstWord, secondWord, targetWord));
