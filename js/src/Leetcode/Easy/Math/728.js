/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  function selfDividing(number) {
    let arr = String(number).split('');
    for (let i = 0; i < arr.length; i++) {
      if (number % Number(arr[i]) !== 0) return false;
    }
    return true;
  }
  let answer = [];
  for (let i = left; i <= right; i++) {
    if (selfDividing(i)) answer.push(i);
  }
  return answer;
};

const left = 1;
const right = 22;
console.log(selfDividingNumbers(left, right));
