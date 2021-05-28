/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let originalChars = words[0].split(''); // [ 'b', 'e', 'l', 'l', 'a' ]

  for (let i = 1; i < words.length; i++) {
    let tmpChars = words[i].split('');
    originalChars = originalChars.filter((char) => {
      let ind = tmpChars.indexOf(char);
      return ind > -1 ? (tmpChars[ind] = true) : false;
    });
  }
  return originalChars;
};

const words = ['bella', 'label', 'roller'];
console.log(commonChars(words));
