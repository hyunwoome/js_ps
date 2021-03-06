/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] !== '#') {
      let toAscii = String.fromCharCode(Number(s[i]) + 96);
      answer += toAscii;
    } else {
      let toAscii = String.fromCharCode(Number(s[i] + s[i + 1]) + 96);
      answer += toAscii;
      i += 2;
    }
  }
  return answer;
};

const s = '12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#';
console.log(freqAlphabets(s));
