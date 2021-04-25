// ! 다시풀어보기
function solution(board) {
  let lengthY = board.length; // 수직 4
  let lengthX = board[0].length; // 수평 4
  let max = 0;

  if (lengthY < 2 || lengthX < 2) {
    for (let i = 0; i < lengthY; i++) {
      for (let j = 0; j < lengthX; j++) {
        if (board[i][j] === 1) {
          max = 1;
        }
      }
    }
  } else {
    for (let i = 1; i < lengthY; i++) {
      for (let j = 1; j < lengthX; j++) {
        if (board[i][j] === 1) {
          board[i][j] =
            Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
          if (board[i][j] > max) {
            max = board[i][j];
          }
        }
      }
    }
  }
  return Math.pow(max, 2);
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ]),
);

// [
//   [0, 0, 1, 1],
//   [1, 1, 1, 1],
// ];
