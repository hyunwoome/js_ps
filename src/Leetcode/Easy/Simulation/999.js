/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        // east
        for (let k = i; k < board.length; k++) {
          if (board[i][k] === 'B') break;
          else if (board[i][k] === 'p') {
            answer++;
            break;
          }
        }

        // west
        for (let k = i; k >= 0; k--) {
          if (board[i][k] === 'B') break;
          else if (board[i][k] === 'p') {
            answer++;
            break;
          }
        }

        // south
        for (let k = j; k < board.length; k++) {
          if (board[k][j] === 'B') break;
          else if (board[k][j] === 'p') {
            answer++;
            break;
          }
        }

        // north
        for (let k = j; k >= 0; k--) {
          if (board[k][j] === 'B') break;
          else if (board[k][j] === 'p') {
            answer++;
            break;
          }
        }
      }
    }
  }
  return answer;
};

const board = [
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log(numRookCaptures(board));
