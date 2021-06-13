// 해시맵 (Map in JS)
function solution(str) {
  let answer = '';
  let sh = new Map(); // Map 객체 생성
  for (let x of str) {
    if (sh.has(x)) sh.set(x, sh.get(x) + 1);
    else sh.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  // 맵에서 key와 value 가져오기
  for (let [key, val] of sh) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

const str = 'BACBACCACCBDEDE';
console.log(solution(str));
