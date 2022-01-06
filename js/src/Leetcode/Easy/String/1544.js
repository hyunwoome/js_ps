/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer.length >= 1) {
      if (answer[answer.length - 1].charCodeAt(0) === s[i].charCodeAt(0) - 32) {
        answer.pop();
      } else if (
        answer[answer.length - 1].charCodeAt(0) ===
        s[i].charCodeAt(0) + 32
      ) {
        answer.pop();
      } else {
        answer.push(s[i]);
      }
    } else {
      answer.push(s[i]);
    }
  }
  return answer.length ? answer.join('') : '';
};

const s = 's';
console.log(makeGood(s));

// 좋은 문자열 : 인접한 두 문자가 없는 문자열 [i] , [i + 1]
