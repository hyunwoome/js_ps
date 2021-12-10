const solution = (str) => {
  const stack = [];
  for (const i of str) {
    if (i === '(') stack.push('(');
    else if (stack[stack.length - 1] === '(' && i === ')') {
      stack.pop();
    }
  }
  return stack.length ? 'NO' : 'YES';
};

const str = '(()(()))(()';
console.log(solution(str));
