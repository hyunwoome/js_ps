/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const numArr = String(n).split('');
  let productOfDigit = 1;
  let sumOfDigit = 0;
  for (const num of numArr) {
    productOfDigit *= Number(num);
    sumOfDigit += Number(num);
  }
  return productOfDigit - sumOfDigit;
};

const n = 4421;
console.log(subtractProductAndSum(n));
