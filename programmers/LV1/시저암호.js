function solution(s, n) {
  let answer = '';
  for (let x of s) {
    let ascii = x.charCodeAt();
    // 대문자
    if (ascii >= 65 && ascii <= 90) {
      let sum = ascii + n;
      if (sum > 90) {
        sum = sum - 26;
      }
      answer += String.fromCharCode(sum);
    } else if (ascii >= 97 && ascii <= 122) {
      let sum = ascii + n;
      if (sum > 122) {
        sum = sum - 26;
      }
      answer += String.fromCharCode(sum);
    } else {
      answer += ' ';
    }
  }
  return answer;
}

const s = 'a B z';
const n = 1;
console.log(solution(s, n));
