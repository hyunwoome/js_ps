const solution = (str) => {
  let s = str.toLowerCase();
  let right = '';
  for (let i = s.length - 1; i >= 0; i--) {
    right += s[i];
  }
  return s === right ? 'YES' : 'NO';
};

const str = 'gooG';
console.log(solution(str));
