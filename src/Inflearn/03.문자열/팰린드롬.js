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

const solution2 = (str2) => {
  const newStr = str2.toLowerCase().replace(/[^a-z]/g, '');
  return newStr === newStr.split(' ').reverse().join(' ') ? 'YES' : 'NO';
};
const str2 = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution2(str2));
