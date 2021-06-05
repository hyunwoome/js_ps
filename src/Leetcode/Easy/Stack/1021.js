/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0;
  let result = '';
  for (const letter of s) {
    if (letter === '(') {
      if (count !== 0) {
        result += letter;
      }
      count++;
    } else {
      count--;
      if (count !== 0) {
        result += letter;
      }
    }
  }
  return result;
};

const s = '(()())(())';
console.log(removeOuterParentheses(s));
