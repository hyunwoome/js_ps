/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const textArr = text.split(' ');
  const arr = [];
  for (let i = 0; i < textArr.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      arr.push(textArr[i + 2]);
    }
  }
  return arr;
};

const text = 'we will we will rock you';
const first = 'we';
const second = 'will';
console.log(findOcurrences(text, first, second));
