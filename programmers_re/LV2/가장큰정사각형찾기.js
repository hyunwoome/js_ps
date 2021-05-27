function solution(board) {
  let x_len = board[0].length;
  let y_len = board.length;
  let answer = 0;

  if (x_len === 1 || y_len === 1) return 1;

  for (let i = 1; i < y_len; i++) {
    for (let j = 1; j < x_len; j++) {
      if (board[i][j] !== 0) {
        let min = Math.min(
          board[i - 1][j - 1],
          board[i][j - 1],
          board[i - 1][j],
        );
        board[i][j] = min + 1;
      }

      if (answer < board[i][j]) {
        answer = board[i][j];
      }
    }
  }
  return answer ** 2;
}

const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(board));
