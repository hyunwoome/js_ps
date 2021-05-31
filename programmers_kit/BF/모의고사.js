function solution(answers) {
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) oneCount++;
    if (answers[i] === two[i % two.length]) twoCount++;
    if (answers[i] === three[i % three.length]) threeCount++;
  }
  let count = [oneCount, twoCount, threeCount];
  let max = Math.max(...count);
  let answer = [];
  for (let i = 0; i < count.length; i++) {
    if (max === count[i]) answer.push(i + 1);
  }
  return answer;
}

const answer = [1, 3, 2, 4, 2];
console.log(solution(answer));
