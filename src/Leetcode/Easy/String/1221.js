/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      sum++;
      if (sum === 0) answer++;
    } else {
      sum--;
      if (sum === 0) answer++;
    }
  }
  return answer;
};

const s = 'RLRRRLLRLL';
console.log(balancedStringSplit(s));
