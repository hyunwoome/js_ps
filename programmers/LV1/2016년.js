function solution(a, b) {
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = b;
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  if (!(sum % 7)) return days[6];
  else return days[(sum % 7) - 1];
}

const a = 5;
const b = 24;
console.log(solution(a, b));
