/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  const splittedArray = s.split(' ');
  const sliceArray = splittedArray.slice(0, k);
  return sliceArray.join(' ');
};

const s = 'Hello how are you Contestant';
const k = 4;
console.log(truncateSentence(s, k));
