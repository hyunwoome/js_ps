function solution(str) {
  let answer = '';
  let len = str.length;
  let cnt = 1;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      if (cnt === 1) {
        answer += str[i];
      } else {
        answer += str[i] + String(cnt);
        cnt = 1;
      }
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'));
