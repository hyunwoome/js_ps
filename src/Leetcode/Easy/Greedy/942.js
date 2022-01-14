/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let base = [];
  for (let i = 0; i <= s.length; i++) {
    base.push(i);
  }
  let min = Math.min(...base);
  let max = Math.max(...base);

  let answer = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === 'I') {
      answer.push(min);
      min += 1;
    } else {
      answer.push(max);
      max -= 1;
    }
  }
  return answer;
};

const s = 'IDID';
console.log(diStringMatch(s));
