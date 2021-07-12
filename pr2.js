function solution(deposit) {
  let stack = [];
  for (let i = 0; i < deposit.length; i++) {
    if (deposit[i] > 0) {
      stack.push(deposit[i]);
      // 음수라면
    } else {
      let tmp = deposit[i]; // -400;
      while (tmp < 0) {
        tmp = stack[stack.length - 1] + tmp;
        stack.pop();
      }
      if (tmp === 0) {
        continue;
      } else {
        stack.push(tmp);
      }
    }
  }
  return stack;
}
const deposit = [500, 1000, 2000, -1000, -1500, 500];
console.log(solution(deposit));
