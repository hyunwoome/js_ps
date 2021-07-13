/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sArr = s.split('');
  let tArr = t.split('');
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '#') {
      if (sArr[i - 1] === undefined) {
        sArr.splice(i, 1);
        i--;
      } else {
        sArr.splice(i - 1, 2);
        i -= 2;
      }
    }
  }

  for (let i = 0; i < tArr.length; i++) {
    if (tArr[i] === '#') {
      if (tArr[i - 1] === undefined) {
        tArr.splice(i, 1);
        i--;
      } else {
        tArr.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
  return sArr.join('') === tArr.join('') ? true : false;
};

const s = 'a##c';
const t = '#a#c';
console.log(backspaceCompare(s, t));
