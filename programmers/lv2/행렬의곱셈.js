// function solution(arr1, arr2) {
//   let answer = [];
//   let row = arr1.length; // 3
//   let col1 = arr1[0].length; // 2
//   let col2 = arr2[0].length; // 2

//   for (let i = 0; i < row; i++) {
//     answer.push([]);
//     for (let j = 0; j < col2; j++) {
//       answer[i].push(0);
//     }
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col2; j++) {
//       for (let k = 0; k < col1; k++) {
//         answer[i][j] += arr1[i][k] * arr2[k][j];
//       }
//     }
//   }

//   return answer;
}

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0)),
  );
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ),
);

// [[2, 3, 2],
//  [4, 2, 4],
//  [3, 1, 4]]

// [[5, 4, 3],
//  [2, 4, 1],
//  [3, 1, 1]]

// [[22, 22, 11],
//  [36, 28, 18],
//  [29, 20, 14]]

// 10, 6, 6 = 22;
// 16, 8,
