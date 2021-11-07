/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const first = 'qwertyuiop';
  const second = 'asdfghjkl';
  const third = 'zxcvbnm';
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let set = new Set();
    for (let j = 0; j < words[i].length; j++) {
      if (first.includes(words[i][j])) set.add('first');
      if (second.includes(words[i][j])) set.add('second');
      if (third.includes(words[i][j])) set.add('third');
    }
    if (set.size === 1) result.push(words[i]);
  }
  return result;
};

const words = ["adsdf","sfd"];
console.log(findWords(words));