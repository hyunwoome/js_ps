function solution(string) {
  return string.toUpperCase();
}

function solution2(string) {
  let answer = '';
  for (let x of string) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

console.log(solution('ItisTimeToStudy'));
console.log(solution2('ItisTimeToStudy'));
