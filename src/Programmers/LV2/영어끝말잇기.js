function solution(n, words) {
  var answer = [0, 0];
  let used = [];
  used.push(words[0]);
  for (let i = 1; i < words.length; i++) {
    let beforeWord = words[i - 1];
    let currentWord = words[i];
    if (
      beforeWord[beforeWord.length - 1] === currentWord[0] &&
      used.indexOf(currentWord) === -1
    ) {
      used.push(currentWord);
    } else {
      var turn = parseInt(i / n) + 1;
      var player = (i % n) + 1;
      return (answer = [player, turn]);
    }
  }
  return answer;
}
