/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (let str of moves) {
    if (str === 'L') x -= 1;
    if (str === 'R') x += 1;
    if (str === 'U') y += 1;
    if (str === 'D') y -= 1;
  }
  if (x === 0 && y === 0) return true;
  else return false;
};

const moves = 'UD';
console.log(judgeCircle(moves));
