function solution(participant, completion) {
  const hash = {};
  for (const key of completion) {
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  }
  for (const person of participant) {
    if (!hash[person] || hash[person] === 0) return person;
    else hash[person] = hash[person] - 1;
  }
}

const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];
console.log(solution(participant, completion));
