function solution(answers) {
  var answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) {
      count[0]++;
    }
    if (two[i % two.length] === answers[i]) {
      count[1]++;
    }
    if (three[i % three.length] === answers[i]) {
      count[2]++;
    }
  }
  // 가장 큰 값을 구하고, count를 순회하면서 가장 큰 값과 같다면 answer에 j + 1해서 push
  let max = Math.max(...count);
  for (let j = 0; j < count.length; j++) {
    if (count[j] === max) {
      answer.push(j + 1);
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));
