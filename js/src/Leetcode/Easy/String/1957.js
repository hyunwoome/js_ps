/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  const n = s.length;
  let answer = '';

  for (let i = 0; i < n; i++) {
    while (s[i] === s[i + 1] && s[i] === s[i + 2]) i++;
    answer += s[i];
  }
  return answer;
};

const s = 'leeetcode';
console.log(makeFancyString(s));
