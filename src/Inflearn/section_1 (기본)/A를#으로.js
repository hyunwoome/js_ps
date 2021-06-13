function solution(string) {
  let answer = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== 'A') answer.push(string[i]);
    else answer.push('#');
  }
  return answer.join('');
}

function solution1(string) {
  let answer = '';
  for (let x of string) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

// 배열은 얕은 복사 (같은 곳을 참조)
// 문자열은 문자열 자체 복사

function solution2(string) {
  let answer = string;
  answer = answer.replace(/A/g, '#');
  return answer;
}

console.log(solution('BANANA'));
console.log(solution1('BANANA'));
console.log(solution2('BANANA'));
