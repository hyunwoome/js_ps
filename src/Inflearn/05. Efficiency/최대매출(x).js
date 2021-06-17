// 슬라이딩 윈도우 알고리즘 사용 = O(n)

function solution(n, k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i]; // 앞에 세개는 미리
  answer = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k]; // 슬라이딩 윈도우
    answer = Math.max(answer, sum);
  }
  return answer;
}

const n = 10; // 일 수
const k = 3; // 연속 일 수
const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(n, k, arr));
