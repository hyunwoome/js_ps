function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

const n = 8;
const a = 4;
const b = 7;
console.log(solution(n, a, b));

// n명 참가 (토너먼트)
// 1번부터 n번까지 배정
// 1 <-> 2, 3 <-> 4, ... n-1 <-> n
// 참가자 A = 4번
// 경쟁자 B = 3번
// 몇 번째 라운드에서 만나는지

// 1, 2 => 1
// 3, 4 => 2
// 5, 6 => 3
