function solution(phone_number) {
  let answer = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }
  let splitted = phone_number.split('').splice(-4, 4).join('');
  answer += splitted;
  return answer;
}

console.log(solution('01033334444'));
