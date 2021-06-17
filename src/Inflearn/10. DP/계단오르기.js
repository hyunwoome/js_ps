// DP
function solution(num) {
  let answer = 0;
  // 다이나믹 테이블 생성
  let dy = Array(num + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= num; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[num];
  return answer;
}

const num = 7;
console.log(solution(num));
