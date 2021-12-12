const solution = (board, moves) => {
  const stack = [];
  let stack2 = [];
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    for (let j = 0; j < board[0].length; j++) {
      if (board[j][move - 1] !== 0) {
        stack.push(board[j][move - 1]);
        board[j][move - 1] = 0;
        break;
      }
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack2.length) {
      if (stack2[stack2.length - 1] === stack[i]) {
        stack2.pop();
        result++;
      } else {
        stack2.push(stack[i]);
      }
    } else {
      stack2.push(stack[i]);
    }
  }
  return result * 2;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
// 4 3 1 1 3 2 X 4
// 4 2 0 4
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
