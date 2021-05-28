/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let number = '12346789';
  let digitNumber = [
    '10#',
    '11#',
    '12#',
    '13#',
    '14#',
    '15#',
    '16#',
    '17#',
    '18#',
    '19#',
    '20#',
    '21#',
    '22#',
    '23#',
    '24#',
    '25#',
    '26#',
  ];
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      let digit = '';
      digit += s[i] + s[i + 1] + s[i + 2];
      let index = digitNumber.indexOf(digit) + 9;
      answer += alphabet[index];
      i += 2;
    } else if (s[i] >= 1 && s[i] <= 9) {
      answer += alphabet[s[i] - 1];
    }
  }
  return answer;
};

const s = '10#11#12';
console.log(freqAlphabets(s));
