/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const tmp = [];
  for (let i = 1; i <= arr.length; i++) {
    let max = 0;
    for (let j = i; j <= arr.length; j++) {
      if (arr[j] > max) max = arr[j];
    }
    if (max === 0) {
      tmp.push(-1);
    } else {
      tmp.push(max);
      max = 0;
    }
  }
  return tmp;
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
