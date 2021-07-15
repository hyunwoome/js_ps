/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let answer = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = '';

  while (i >= 0 || j >= 0) {
    const digit1 = i < 0 ? 0 : parseInt(num1.charAt(i));
    const digit2 = j < 0 ? 0 : parseInt(num2.charAt(j));
    const sum = digit1 + digit2 + carry;
    const digit3 = sum % 10;
    carry = Math.floor(sum / 10);

    answer = digit3 + answer;
    i--;
    j--;
  }
  if (carry === 1) answer = carry + answer;
  return answer;
};

const num1 = '11';
const num2 = '123';
console.log(addStrings(num1, num2));
