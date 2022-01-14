const solution = (str) => {
  let repeat = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      repeat++;
    } else {
      result += `${str[i]}${repeat}`;
      repeat = 1;
    }
  }
  return result.replace(/[1]/g, '');
};

const str = 'KKHSSSSSSSE';
console.log(solution(str));
