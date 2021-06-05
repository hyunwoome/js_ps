/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const splittedSentence = s.split(' ');
  const sortedNumber = splittedSentence.sort(
    (a, b) => a[a.length - 1] - b[b.length - 1],
  );
  const removeNumber = sortedNumber.join(' ').replace(/[0-9]/g, '');
  return removeNumber;
};

const s = 'is2 sentence4 This1 a3';
console.log(sortSentence(s));
