/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  if (String(n).length < 3) return String(n);
  let answer = '';
  let digit = 0;
  for (let i = String(n).length - 1; i >= 0; i--) {
    answer += String(n)[i];
    digit++;
    if (i !== 0 && digit % 3 === 0) {
      answer += '.';
      digit = 0;
    }
  }
  return answer.split('').reverse().join('');
};

const n = 1234;
console.log(thousandSeparator(n));
