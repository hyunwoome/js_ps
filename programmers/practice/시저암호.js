function solution(s, n) {
  var answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
    } else if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      let high = s[i].charCodeAt() + n;
      if (high > 90) {
        answer += String.fromCharCode(high - 90 + 64);
      } else {
        answer += String.fromCharCode(high);
      }
    } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      let high = s[i].charCodeAt() + n;
      if (high > 122) {
        answer += String.fromCharCode(high - 122 + 96);
      } else {
        answer += String.fromCharCode(high);
      }
    }
  }
  return answer;
}

console.log(solution('a Z z', 4));
