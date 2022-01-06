// /**
//  * @param {string} sentence
//  * @param {string} searchWord
//  * @return {number}
//  */
// var isPrefixOfWord = function (sentence, searchWord) {
//   const splittedSentence = sentence.split(' ');
//   for (let i = 0; i < splittedSentence.length; i++) {
//     if (splittedSentence[i].startsWith(searchWord)) return i + 1;
//   }
//   return -1;
// };

// const sentence = 'this problem is an easy problem';
// const searchWord = 'pro';
// console.log(isPrefixOfWord(sentence, searchWord));

const months = ['Jan', 'Feb', 'March', 'April', 'May'];
console.log(months.splice(0, 2));
console.log(months);
