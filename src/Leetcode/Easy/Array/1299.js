/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let answer = [];
  for (let i = 1; i <= arr.length; i++) {
    let max = 0;
    for (let j = i; j <= arr.length; j++) {
      if (arr[j] > max) max = arr[j];
    }
    if (max === 0) {
      answer.push(-1);
    } else {
      answer.push(max);
      max = 0;
    }
  }
  return answer;
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
