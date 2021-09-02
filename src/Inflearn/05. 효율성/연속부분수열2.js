// function solution(n, m, arr) {
//   let answer = 0;
//   let lt = 0;
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] <= m) answer++;
//   }

//   for (let rt = 0; rt < n; rt++) {
//     sum += arr[rt];
//     if (sum <= m) answer++;
//     while (sum > m) {
//       sum -= arr[lt++];
//       if (sum <= m) answer++;
//     }
//   }

//   return answer;
// }

function solution1(n, m, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

const n = 5;
const m = 5;
const arr = [1, 3, 1, 2, 3];
console.log(solution1(n, m, arr));
