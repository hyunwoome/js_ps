const solution = (str) => {
  const replaceStr = str.replace(/[,:;\s]/g, '');
  const lowerCase = replaceStr.toLowerCase();
  let right = '';
  for (let i = lowerCase.length - 1; i >= 0; i--) {
    right += lowerCase[i];
  }
  return lowerCase === right ? 'YES' : 'NO';
};

const str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
