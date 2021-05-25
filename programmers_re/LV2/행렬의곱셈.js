function solution(arr1, arr2) {
  const main_length = arr1.length; // 3
  const arr1_length = arr1[0].length; // 2
  const arr2_length = arr2[0].length; // 2

  let answer = Array(main_length);
  for (let m = 0; m < main_length; m++) {
    answer[m] = Array(arr2_length).fill(0);
    for (let t = 0; t < arr2_length; t++) {
      for (let o = 0; o < arr1_length; o++) {
        answer[m][t] += arr1[m][o] * arr2[o][t];
      }
    }
  }
  return answer;
}

const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];
console.log(solution(arr1, arr2));
