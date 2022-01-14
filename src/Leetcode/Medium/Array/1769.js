/**
 * @param {string} boxes
 * @return {number[]}
 */

// Runtime: 160 ms, faster than 67.75% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
// Memory Usage: 42.4 MB, less than 25.76% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.

var minOperations = function (boxes) {
  let answer = [];
  let oneIndex = [];

  // find number One index
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === '1') oneIndex.push(i);
  }

  // compare zero index to one index
  for (let i = 0; i < boxes.length; i++) {
    let sum = 0;
    for (let j = 0; j < oneIndex.length; j++) {
      sum += Math.abs(oneIndex[j] - i);
    }
    answer.push(sum);
  }
  return answer;
};

const boxes = '001011';
console.log(minOperations(boxes));

// n개의 박스
// 공 1 비어있으면 0
// 한 번의 작업에서 한 개의 공을 상자에서 인접한 상자로 이동
