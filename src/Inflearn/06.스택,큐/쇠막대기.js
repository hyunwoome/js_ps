const solution = (str) => {
  const stack = [];
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (str[i - 1] === '(') result += stack.length;
      else result++;
    }
  }
  return result;
};

const str = '(((()(()()))(())()))(()())';
console.log(solution(str));
