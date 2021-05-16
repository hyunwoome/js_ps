function solution(s) {
  var answer = true;
  if (!(s.length === 4 || s.length === 6)) return false;
  for (const str of s) {
    if (isNaN(str)) return false;
  }
  return answer;
}

const s = '12345';
console.log(solution(s));
