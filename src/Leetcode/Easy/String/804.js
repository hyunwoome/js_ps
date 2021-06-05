/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
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

  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let tmp = '';
    for (let x of words[i]) {
      let map = x.charCodeAt() - 97;
      tmp += morse[map];
    }
    arr.push(tmp);
    tmp = '';
  }

  let set = new Set(arr);

  return set.size;
};

const words = ['gin', 'zen', 'gig', 'msg'];
console.log(uniqueMorseRepresentations(words));
