function solution(str) {
  let stack = [];
  for (let x of str) {
    if (x === '(') {
      stack.push('(');
    } else {
      if (stack.length) stack.pop();
      else return 'NO';
    }
  }
  if (stack.length) return 'NO';
  return 'YES';
}

const str = '(()(()))(())';
console.log(solution(str));
