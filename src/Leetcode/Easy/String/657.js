/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let pos = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      pos[0] += 1;
    } else if (moves[i] === 'D') {
      pos[0] -= 1;
    } else if (moves[i] === 'R') {
      pos[1] += 1;
    } else if (moves[i] === 'L') {
      pos[1] -= 1;
    }
  }
  return pos[0] === 0 && pos[1] === 0;
};

const moves = 'RRDD';
console.log(judgeCircle(moves));
