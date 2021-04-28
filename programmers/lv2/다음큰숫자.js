function solution(n) {
  let answer = n;
  while (true) {
    answer++;
    let binaryNumCount = n
      .toString(2)
      .split('')
      .filter((el) => el === '1').length;
    let binaryAnswerCount = answer
      .toString(2)
      .split('')
      .filter((el) => el === '1').length;
    if (binaryAnswerCount === binaryNumCount) break;
  }
  return answer;
}

console.log(solution(78));
console.log(solution(15));
