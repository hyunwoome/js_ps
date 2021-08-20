/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let a = text.split(' ');
  let se = new Set();
  for (const c of brokenLetters) se.add(c);
  let res = 0;
  // ['leet', 'code']
  for (const s of a) {
    let broken = false;
    // 'l', 'e', 'e', 't'
    for (const c of s) {
      if (se.has(c)) {
        broken = true;
        break;
      }
    }
    if (!broken) res++;
  }
  return res;
};

const text = 'leet code';
const brokenLetters = 'lt';
console.log(canBeTypedWords(text, brokenLetters));
