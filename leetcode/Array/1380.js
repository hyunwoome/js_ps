/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let min = [];
  for (let i = 0; i < matrix.length; i++) {
    min.push(Math.min(...matrix[i]));
  }

  let minIdx = [];
  for (let i = 0; i < matrix.length; i++) {
    minIdx.push(matrix[i].indexOf(min[i]));
  }

  let maxValue = [];
  for (let i = 0; i < matrix.length; i++) {
    let column = [];
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][minIdx[i]]);
    }
    maxValue.push(Math.max(...column));
  }

  let answer = [];
  for (let i = 0; i < maxValue.length; i++) {
    if (maxValue.indexOf(min[i]) !== -1) answer.push(min[i]);
  }
  return answer;
};

const matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];
console.log(luckyNumbers(matrix));
