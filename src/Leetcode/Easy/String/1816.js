/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let answer = [];
  const splitArray = s.split(' ');
  for (let i = 0; i < k; i++) {
    answer.push(splitArray[i]);
  }
  return answer.join(' ');
};

const s = 'Hello how are you Contestant';
const k = 4;
console.log(truncateSentence(s, k));
