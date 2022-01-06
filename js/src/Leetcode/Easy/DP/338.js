/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  function getBit(num) {
    let answer = 0;
    let bit = num.toString(2);
    for (let i = 0; i < bit.length; i++) {
      if (bit[i] === '1') answer++;
    }
    return answer;
  }
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(getBit(i));
  }
  return result;
};

const n = 5;
console.log(countBits(n));
