/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let str = word; // ab
  let count = 0;
  while (sequence.includes(str)) {
    count++;
    str += word;
  }
  return count;
};

const sequence = 'ababc';
const word = 'ab';
console.log(maxRepeating(sequence, word));
