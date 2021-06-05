function solution(numbers) {
  let answer = numbers
    .map((el) => String(el))
    .sort((a, b) => b + a - (a + b))
    .join('');
  return answer[0] === '0' ? '0' : answer;
}

const numbers = [6, 10, 2];
console.log(solution(numbers));
