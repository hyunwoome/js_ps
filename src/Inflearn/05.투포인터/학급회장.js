const solution = (n, str) => {
  let result = '';
  let max = 0;
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }
  for (const i in obj) {
    if (max < obj[i]) {
      max = obj[i];
      result = i;
    }
  }
  return result;
};

const n = 15;
const str = 'BACBACCACCBDEDE';
console.log(solution(n, str));
