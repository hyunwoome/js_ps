function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

const number = '1924';
const k = 2;
console.log(solution(number, k));
