/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const getScore = (left, right) => {
    let count = 0;
    for (let i = 0; i < left.length; i++) {
      if (left[i] === '0') count++;
    }
    for (let i = 0; i < right.length; i++) {
      if (right[i] === '1') count++;
    }
    return count;
  };

  const score = [];
  for (let i = 0; i < s.length - 1; i++) {
    const left = s.slice(0, i + 1);
    const right = s.slice(i + 1, s.length);
    score.push(getScore(left, right));
  }
  return Math.max(...score);
};

const s = '011101';
console.log(maxScore(s));
