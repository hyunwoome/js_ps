function solution(k, arr) {
  let tmp = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        tmp.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let set = new Set(tmp.sort((a, b) => b - a));
  return Array.from(set)[k - 1];
}

const k = 3;
const card = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(k, card));

// 카드 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록한다.
// 기록한 값 중 k 번쨰로 큰 수를 출력
