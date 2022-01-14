/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  arr = arr.join('');
  let total = '';
  console.log(arr);
  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join('');
    total += pieces[i];
    if (arr.indexOf(pieces[i]) === -1) return false;
  }
  if (total.length < arr.length) return false;
  return true;
};

const arr = [91, 4, 64, 78];
const pieces = [[78], [4, 64], [91]];
console.log(canFormArray(arr, pieces));
