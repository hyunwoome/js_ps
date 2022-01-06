/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  let answer = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) answer.push([arr[i - 1], arr[i]]);
  }
  return answer;
};

const arr = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(minimumAbsDifference(arr));

// 오름차순
// a < b
// b - a는 arr에 있는 두 요소의 최소 절대 차이와 같음
