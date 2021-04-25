function solution(s) {
  const stack = [];
  const strToArray = [...s];
  if (strToArray[0] === ')') return false;
  strToArray.map((el) => {
    if (el === '(') stack.push('(');
    if (el === ')') stack.pop(stack.length - 1);
  });
  return stack.length ? false : true;
}

console.log(solution('(()('));
