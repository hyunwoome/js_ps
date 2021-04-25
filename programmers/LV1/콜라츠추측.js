function solution(num) {
  let count = 0;
  let number = num;
  while (number > 1) {
    if (number % 2 === 0) {
      number /= 2;
      count++;
    } else {
      number = number * 3 + 1;
      count++;
    }
  }
  return count > 500 ? -1 : count;
}

console.log(solution(16));
