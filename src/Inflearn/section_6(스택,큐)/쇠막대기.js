function solution(str) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push('(');
    else {
      if (str[i - 1] === '(') {
        stack.pop();
        sum += stack.length;
      } else {
        stack.pop();
        sum += 1;
      }
    }
  }
  return sum;
}

const str1 = '(((()(()()))(())()))(()())';
console.log(solution(str1));
