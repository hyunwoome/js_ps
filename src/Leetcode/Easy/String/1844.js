/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      answer += s[i];
    } else {
      answer += String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i]));
    }
  }
  return answer;
};

const s = 'a1c1e1';
console.log(replaceDigits(s));
