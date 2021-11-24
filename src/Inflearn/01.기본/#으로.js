const solution = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') result += '#';
    else result += str[i];
  }
  return result;
};

const str = 'BANANA';
console.log(solution(str));
