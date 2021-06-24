/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let str = String(num);
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      answer += '9';
      break;
    } else {
      answer += str[i];
    }
  }
  if (answer.length !== str.length) {
    let len = answer.length;
    answer += str.substring(len);
  }
  return Number(answer);
};

const num = 9669;
console.log(maximum69Number(num));
