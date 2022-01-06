/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (n === 1) return [0];

  let answer = [];
  if (n % 2 !== 0) {
    let left = -Math.floor(n / 2);
    let right = Math.floor(n / 2);
    for (let i = left; i <= right; i++) {
      answer.push(i);
    }
  } else {
    let left = -(n / 2);
    let right = n / 2;
    for (let i = left; i < 0; i++) {
      answer.push(i);
    }
    for (let i = 1; i <= right; i++) {
      answer.push(i);
    }
  }
  return answer;
};

const n = 4;
console.log(sumZero(n));
