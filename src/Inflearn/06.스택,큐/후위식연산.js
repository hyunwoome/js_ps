const solution = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const nums = +str[i];
    if (!Number.isNaN(nums)) result.push(nums);
    else if (str[i] === '+') {
      const pop1 = result.pop();
      const pop2 = result.pop();
      result.push(pop2 + pop1);
    } else if (str[i] === '-') {
      const pop1 = result.pop();
      const pop2 = result.pop();
      result.push(pop2 - pop1);
    } else if (str[i] === '*') {
      const pop1 = result.pop();
      const pop2 = result.pop();
      result.push(pop2 * pop1);
    } else if (str[i] === '/') {
      const pop1 = result.pop();
      const pop2 = result.pop();
      result.push(pop2 / pop1);
    }
  }
  return result.join('');
};

const str = '352+*9-';
console.log(solution(str));
