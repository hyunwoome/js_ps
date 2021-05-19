function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant.indexOf(completion[i]) !== -1) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant.join('');
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];
console.log(solution(participant, completion));
