/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let answer = [];
  if (n % 2 === 0) {
    for (let i = 1; i <= n / 2; i++) {
      answer.push(-i);
      answer.push(i);
    }
  } else {
    for (let i = 1; i <= parseInt(n / 2); i++) {
      answer.push(-i);
      answer.push(i);
    }
    answer.push(0);
  }
  return answer;
};

const n = 5;
console.log(sumZero(n));
