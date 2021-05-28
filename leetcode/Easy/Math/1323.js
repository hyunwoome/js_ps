/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '6') {
      arr[i] = '9';
      break;
    } else if (arr.indexOf('9') === -1) {
      return num;
    }
  }
  return parseInt(arr.join(''));
};

const num = 9669;
console.log(maximum69Number(num));
