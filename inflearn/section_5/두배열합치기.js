function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

const n = [1, 3, 5];
const m = [2, 3, 6, 7, 9];
console.log(solution(n, m));

// sort(n) => O(n log n)
// 효율성을 위해 투포인터 알고리즘 사용
