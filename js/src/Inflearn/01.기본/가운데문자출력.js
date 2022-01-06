const solution = (str) => {
  let result = '';
  if (str.length % 2 === 0) {
    result += str[Math.floor(str.length / 2) - 1];
    result += str[Math.floor(str.length / 2)];
  } else {
    result += str[Math.floor(str.length / 2)];
  }
  return result;
};

const str = 'study';
console.log(solution(str));
