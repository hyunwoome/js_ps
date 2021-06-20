/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let parenthesesArr = [];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      sum++;
      parenthesesArr.push(sum);
    } else if (s[i] === ')') {
      sum--;
      parenthesesArr.push(sum);
    }
  }
  return parenthesesArr.length ? Math.max(...parenthesesArr) : 0;
};

const s = '1';
console.log(maxDepth(s));
