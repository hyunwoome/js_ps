/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let N = arr.length;
  let i = 0;

  while (i + 1 < N && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === N - 1) return false;

  while (i + 1 < N && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === N - 1;
};

const arr = [2, 0, 2];
console.log(validMountainArray(arr));
