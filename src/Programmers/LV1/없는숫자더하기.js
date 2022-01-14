function solution(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur);
  const num = 45;
  return num - sum;
}

const numbers = [5,8,4,0,6,7,9];
console.log(solution(numbers));