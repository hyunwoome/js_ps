// function solution(arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > arr2[i] && arr1[i] - arr2[i] === 1) {
//       answer.push('A');
//     } else if (arr1[i] > arr2[i] && arr1[i] - arr2[i] === 2) {
//       answer.push('B');
//     } else if (arr1[i] < arr2[i] && arr2[i] - arr1[i] === 1) {
//       answer.push('B');
//     } else if (arr1[i] < arr2[i] && arr2[i] - arr1[i] === 2) {
//       answer.push('A');
//     } else {
//       answer.push('D');
//     }
//   }
//   return answer;
// }

function solution2(arr1, arr2) {
  let answer = '';
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) answer += 'D' + ' ';
    else if (arr1[i] === 1 && arr2[i] === 3) answer += 'A' + ' ';
    else if (arr1[i] === 2 && arr2[i] === 1) answer += 'A' + ' ';
    else if (arr1[i] === 3 && arr2[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }
  return answer;
}

// console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
console.log(solution2([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

// 1 : 가위, 2 : 바위, 3: 보
// 1 < 2 < 3 < 1
