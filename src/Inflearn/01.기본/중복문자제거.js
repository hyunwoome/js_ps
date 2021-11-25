const solution = (str) => {
  const set = new Set(str);
  return [...set].join('');
};

const str = 'ksekkset';
console.log(solution(str));

const solution2 = (str) => {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
};

const str2 = 'ksekkset';
console.log(solution2(str2));
