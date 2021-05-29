function solution(num) {
  let answer = num;
  let count = 0;
  while (answer > 1) {
    if (answer % 2 === 0) {
      answer /= 2;
      count++;
    } else {
      answer = answer * 3 + 1;
      count++;
    }
  }
  if (count >= 500) {
    return -1;
  }
  return count;
}

const n = 626331;
console.log(solution(n));
