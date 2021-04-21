function solution(n) {
  var answer = 0;
  if (Number.isInteger(Math.sqrt(n))) {
    let sqrt = Math.sqrt(n) + 1;
    answer = sqrt ** 2;
  } else {
    answer = -1;
  }
  return answer;
}

console.log(solution(121));
