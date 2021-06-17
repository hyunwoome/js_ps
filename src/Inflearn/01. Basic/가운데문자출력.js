const solution = (string) => {
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 === 0) {
      answer += string[string.length / 2];
      answer += string[string.length / 2 - 1];
      break;
    } else {
      answer += string[Math.floor(string.length / 2)];
      break;
    }
  }
  return answer;
};

const solution1 = (string) => {
  let answer;
  let mid = Math.floor(string.length / 2);
  if (string.length % 2 !== 0) answer = string.substring(mid, mid + 1);
  else answer = string.substring(mid - 1, mid + 1);
  return answer;
};

const solution2 = (string) => {
  let answer;
  let mid = Math.floor(string.length / 2);
  if (string.length % 2 !== 0) answer = string.substr(mid, 1);
  else answer = string.substr(mid - 1, 2);
  return answer;
};

console.log(solution('study'));
console.log(solution1('good'));
console.log(solution2('good'));
console.log(solution2('study'));
