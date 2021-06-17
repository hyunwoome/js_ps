function solution(m, arr) {
  let answer = 0;
  let n = arr.length; // 학생 수
  arr.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

/**
 * 상품 사는 갯수가 중요!
 * 총 비용으로 정렬 (2, 2), (4, 3), (4, 5) ...
 * 쿠폰이 없으면 앞에서 부터 넣으면 됨.
 * 모든 경우를 다 해보기.. 그럼 모든 경우가 뭐냐??! 그래서 어려움
 * => 할인된 비용을 적은 값부터 큰 값까지 모두 적용해서 계산
 */

let input = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, input));
