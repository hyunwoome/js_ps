function solution(board, moves) {
  let result = 0;
  let basket = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 0이 아니면
      if (board[j][moves[i] - 1]) {
        let doll = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        if (basket[basket.length - 1] === doll) {
          basket.pop();
          result += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  }
  return result;
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
