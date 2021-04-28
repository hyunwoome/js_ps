function solution(numbers) {
  var answer = [];
  let tmp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      tmp.push(numbers[i] + numbers[j]);
    }
  }
  tmp.forEach((el) => {
    if (!answer.includes(el)) answer.push(el);
  });
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
