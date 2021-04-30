function solution(string) {
  let answer = '';
  for (let x of string) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
