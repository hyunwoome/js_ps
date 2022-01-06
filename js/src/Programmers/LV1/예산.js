function solution(d, budget) {
  let sortArr = d.sort((a, b) => a - b);
  let value = 0;
  let answer = 0;
  for (let i = 0; i < sortArr.length; i++) {
    value += sortArr[i];
    if (value <= budget) {
      answer++;
    }
  }
  return answer;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;
console.log(solution(d, budget));
