function solution(length, arr) {
  let answer = '';
  let max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));
