/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s === goal) return true;

  let count = s.length;
  const arrS = s.split('');

  while (count) {
    const item = arrS.shift();
    arrS.push(item);
    if (arrS.join('') === goal) return true;
    count--;
  }
  return false;
};

const s = 'abcde';
const goal = 'cdeab';
console.log(rotateString(s, goal));
