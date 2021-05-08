// function solution(n, k) {
//   let answer = 0;
//   let queue = [];
//   for (let i = 0; i < n; i++) {
//     queue.push(i + 1);
//   }
//   for (let i = 0; i < k - 1; i++) {
//     let num = queue.shift();
//     queue.push(num);
//   }
//   for (let i = k - 1; i <= k; i++) {
//     queue.shift();
//   }

//   return answer;
// }

function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 0; i < k - 1; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

const n = 8;
const k = 3;
console.log(solution(n, k));
// n = 왕자
// 나이순으로 1 ~ n 까지
