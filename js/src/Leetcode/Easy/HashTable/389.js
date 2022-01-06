/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sArr = s.split('');
  const tArr = t.split('');
  for (let i = 0; i < sArr.length; i++) {
    if (tArr.includes(sArr[i])) {
      let idx = tArr.indexOf(sArr[i]);
      tArr.splice(idx, 1);
    }
  }
  return tArr.join('');
};

const s = 'ae';
const t = 'aea';
console.log(findTheDifference(s, t));
