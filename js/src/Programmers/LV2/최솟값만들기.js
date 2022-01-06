function solution(A, B) {
  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < sortA.length; i++) {
    answer += sortA[i] * sortB[i];
  }
  return answer;
}

const A = [1, 4, 2];
const B = [5, 4, 4];
console.log(solution(A, B));
