/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort((a, b) => a.length - b.length);
  let res = [];
  for (var i = 0; i < words.length; i++) {
    let target = words[i];
    for (var j = i + 1; j < words.length; j++) {
      if (words[j].includes(target)) {
        res.push(target);
        break;
      }
    }
  }
  return res;
};

const words = ['mass', 'as', 'hero', 'superhero'];
console.log(stringMatching(words));
