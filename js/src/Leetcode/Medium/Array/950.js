/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b); // [2, 3, 5, 7, 11, 13, 17]
  const answer = [];
  while (deck.length) {
    answer.unshift(deck.pop()); // 7
    answer.unshift(answer.pop()); // 17
  }
  answer.push(answer.shift());
  return answer;
};

const deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));
