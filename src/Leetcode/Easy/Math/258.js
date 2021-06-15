/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let str = String(num);
  if (str.length === 1) {
    return Number(str);
  } else {
    let splittedStr = str.split('');
    let answer = splittedStr.reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
    return addDigits(answer);
  }
};

const num = 38;
console.log(addDigits(num));
