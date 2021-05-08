function solution(a, b) {
  let answer = 0;
  for (let x of a) {
    if (x === b) answer++;
  }
  return answer;
}

function solution1(a, b) {
  let answer = a.split(b).length;
  return answer - 1;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
console.log(solution1('COMPUTERPROGRAMMING', 'R'));
