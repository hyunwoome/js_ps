function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  let sortSet = new Set(answer.sort((a, b) => a - b));
  return Array.from(sortSet);
}

const numbers = [2, 1, 3, 4, 1];
console.log(solution(numbers));
