/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  return s
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((el) => el.slice(0, el.length - 1))
    .join(' ');
};

const s = 'Myself2 Me1 I4 and3';
// const s = 'z3 z2 z1';
console.log(sortSentence(s));
