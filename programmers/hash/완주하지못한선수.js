function solution(participant, completion) {
  let parSort = participant.sort();
  let comSort = completion.sort();
  for (let i = 0; i < parSort.length; i++) {
    if (parSort[i] !== comSort[i]) {
      return parSort[i];
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
