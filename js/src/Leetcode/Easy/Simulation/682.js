/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    if (isNaN(Number(ops[i])) !== true) {
      stack.push(Number(ops[i]));
    } else if (ops[i] === 'C') {
      stack.pop();
    } else if (ops[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (ops[i] === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  }
  return stack.reduce((acc, cur) => acc + cur);
};

const ops = ['5', '2', 'C', 'D', '+'];
console.log(calPoints(ops));
