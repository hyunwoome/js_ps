/**
 * @param {string} s
 * @return {string}
 */
let reverseOnlyLetters = function (S) {
  let letters = S.match(/[a-z]/gi); // 대소문자 구문없이 일치하는 모든 것
  let res = '';
  for (let i of S) {
    if (i.toLowerCase() !== i.toUpperCase()) {
      res += letters.pop();
      continue; // 안내려가고 다시 올라감
    }
    res += i;
  }
  return res;
};

const s = 'ab-cd';
console.log(reverseOnlyLetters(s));
