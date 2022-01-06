const solution = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] !== ')') stack.push(str[i]);
    else if (str[i] === ')') {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] !== '(') stack.pop();
        else if (stack[i] === '(') {
          stack.pop();
          break;
        }
      }
    }
  }
  return stack.join('');
};

const str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
