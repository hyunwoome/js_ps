// function solution(n, m, arr) {
//   let answer = 0;
//   let p1 = 0;
//   let p2 = 0;
//   let sum = 0;
//   while (p1 < n && p2 < n) {
//     for (p1; p1 < p2; p2++) {
//       if (p1 + p2 === m) answer++;
//       else p1++;
//     }
//   }

//   return answer;
// }

// 2중for문 : O(N^2)
// 투포인터 : O(N)

function solution1(n, m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

const n = 8; // 갯수
const m = 6; // 합계
const array = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution1(n, m, array));
