/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const sumDigit = (num) => {
    const splittedNum = num.toString().split('');
    return splittedNum
      .map((el) => parseInt(el))
      .reduce((acc, cur) => acc + cur);
  };

  let arr = [];
  for (let i = lowLimit; i <= highLimit; i++) {
    arr.push(sumDigit(i));
  }

  let result = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let max = 0;
  for (let key in result) {
    if (max < result[key]) max = result[key];
  }
  return max;
};

const lowLimit = 1;
const highLimit = 10;
console.log(countBalls(lowLimit, highLimit));
