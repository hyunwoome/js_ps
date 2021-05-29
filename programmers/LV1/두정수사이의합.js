function solution(a, b) {
  var answer = 0;
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }
  return answer;
}

const a = 3;
const b = 5;
console.log(solution(a, b));
