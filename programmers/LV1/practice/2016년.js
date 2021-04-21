function solution(a, b) {
  let answer = '';
  let days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total = 0;
  for (let i = 0; i < a - 1; i++) {
    total += month[i];
  }
  total += b - 1;
  answer = days[total % 7];
  return answer;
}

console.log(solution(5, 24));
