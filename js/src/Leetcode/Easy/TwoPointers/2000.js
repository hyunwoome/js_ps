const reversePrefix = function (word, ch) {
  const firstIndex = word.indexOf(ch) + 1;
  const lastIndex = word.length;
  let partStr = '';
  let restStr = '';
  if (firstIndex !== -1) {
    partStr = word.substring(0, firstIndex);
    restStr = word.substring(firstIndex, lastIndex);
    return partStr.split('').reverse().join('') + restStr;
  } else {
    return word;
  }
};

const word = "abcdefd";
const ch = "d";
console.log(reversePrefix(word, ch));