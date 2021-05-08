// function solution(board, moves) {
//   let answer = 0;
//   let stack = [];
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][moves[j] - 1] !== 0) {
//         stack.push(board[i][moves[j] - 1]);
//         board[i][moves[j] - 1] = 0;
//         if (board[i][moves[j] - 1] === stack[stack.length - 1]) {
//           stack.pop();
//           answer += 2;
//         }
//       }
//     }
//   }
//   return answer;
// }

// ! 다시풀어보기

function solution(board, moves) {
  let answer = 0;
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
