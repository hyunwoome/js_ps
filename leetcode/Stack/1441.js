/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let stack = [];
  for (let i = 0, j = 1; i < target.length; i++, j++) {
    if (target[i] === j) stack.push('Push');
    else {
      stack.push('Push', 'Pop');
      i--;
    }
  }
  return stack;
};

const target = [1, 3];
const n = 3;
console.log(buildArray(target, n));
