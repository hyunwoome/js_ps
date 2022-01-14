/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let answer = new Set();
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  for (let i = 0; i < words.length; i++) {
    let word = '';
    for (let j = 0; j < words[i].length; j++) {
      let asciiNums = words[i][j].charCodeAt() - 97;
      word += morse[asciiNums];
    }
    answer.add(word);
  }
  return answer.size;
};

const words = ['gin', 'zen', 'gig', 'msg'];
console.log(uniqueMorseRepresentations(words));
