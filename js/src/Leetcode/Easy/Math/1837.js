/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const digits = n.toString(k);
  let answer = 0;
  for (const num of digits) {
    answer += Number(num);
  }
  return answer;
};

const n = 34;
const k = 6;
console.log(sumBase(n, k));
