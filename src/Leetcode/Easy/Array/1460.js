/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  let sortTarget = target.sort((a, b) => a - b);
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortTarget.length; i++) {
    if (sortTarget[i] !== sortArr[i]) return false;
  }
  return true;
};

const target = [1, 2, 3, 4];
const arr = [2, 4, 1, 3];
console.log(canBeEqual(target, arr));
