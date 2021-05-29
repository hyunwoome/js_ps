function solution(s) {
  let stack = [];
  for (let x of s) {
    if (stack[stack.length - 1] === '(' && x === ')') stack.pop();
    else stack.push(x);
  }
  return stack.length ? false : true;
}

const s = '()()';
console.log(solution(s));
