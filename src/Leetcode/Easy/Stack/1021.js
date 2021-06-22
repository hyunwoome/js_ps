/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let answer = '';
  let sum = 0;
  for (const char of s) {
    if (char === '(' && sum > 0) {
      answer += '(';
    }
    if (char === '(') {
      sum++;
    }
    if (char === ')' && sum > 1) {
      answer += ')';
    }
    if (char === ')') {
      sum--;
    }
  }
  return answer;
};

const s = '(()())(())(()(()))';
console.log(removeOuterParentheses(s));
