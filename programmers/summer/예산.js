function solution(d, budget) {
  let answer = 0;
  let sortingDivision = d.sort((a, b) => a - b);
  for (let i = 0; i < sortingDivision.length; i++) {
    budget -= sortingDivision[i];
    if (budget >= 0) {
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
