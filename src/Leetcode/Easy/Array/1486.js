/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let arr = [start];
  let sum = start;
  for (let i = 1; i < n; i++) {
    sum += 2;
    arr.push(sum);
  }
  return arr.reduce((acc, cur) => {
    return acc ^ cur;
  });
};

const n = 10;
const start = 5;
console.log(xorOperation(n, start));
