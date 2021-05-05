function solution(A, B) {
  let sum = 0;
  let ascA = A.sort((a, b) => a - b);
  let descB = B.sort((a, b) => b - a);
  for (let i = 0; i < ascA.length; i++) {
    sum += ascA[i] * descB[i];
  }
  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10

// 각각 한 개 숫자 뽑아 두 수 곱하기
// 배열의 길이만큼 반복
// 두 수를 곱한 값을 누적하여 더함
// 누적값이 최소
