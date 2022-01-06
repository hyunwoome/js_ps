/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  function isDigit(num) {
    let arr = String(num).split('');
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
      answer += Number(arr[i]);
    }
    return answer;
  }

  let arr = [];
  for (let i = lowLimit; i <= highLimit; i++) {
    arr.push(isDigit(i));
  }

  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  let max = 0;
  for (const [key, value] of Object.entries(obj)) {
    max = Math.max(max, value);
  }
  return max;
};

const lowLimit = 5;
const highLimit = 15;
console.log(countBalls(lowLimit, highLimit));
