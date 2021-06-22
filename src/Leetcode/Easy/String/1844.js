/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 && s[i] <= 9) {
      let code = s[i - 1].charCodeAt(0);
      let str = code + Number(s[i]);
      if (str > 122) str -= 26;
      answer += String.fromCharCode(str);
    } else {
      answer += s[i];
    }
  }
  return answer;
};

const s = 'a1c1e1';
console.log(replaceDigits(s));
