function solution(participant, completion) {
  let sortPar = participant.sort();
  let sortCom = completion.sort();
  for (let i = 0; i < sortPar.length; i++) {
    if (sortPar[i] !== sortCom[i]) {
      return sortPar[i];
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
