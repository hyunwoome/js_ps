/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  const groupSet = new Set();
  A.forEach((a) => groupSet.add(transform(a)));
  return groupSet.size;
};

const transform = (S) => {
  const even = S.split('').filter((_, i) => i % 2 === 0);
  const odd = S.split('').filter((_, i) => i % 2 === 1);
  even.sort();
  odd.sort();
  return `${even.join('')}${odd.join('')}`;
};

const words = ['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'];
console.log(numSpecialEquivGroups(words));
