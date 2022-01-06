function solution(arr, divisor) {
  var answer = [];
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if (!(sortArr[i] % divisor)) answer.push(sortArr[i]);
  }
  if (answer.length) return answer;
  else return [-1];
}

const arr = [5, 9, 7, 10];
const divisor = 5;
console.log(solution(arr, divisor));
