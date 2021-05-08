// function solution(arr) {
//   let answer = 0;
//   let one = [];
//   let two = [];
//   let three = [];
//   let four = [];
//   let newArr = Array(one, two, three, four);

//   for (let i = 0; i < arr.length; i++) {
//     one.push(arr[i].indexOf(1) + 1);
//     two.push(arr[i].indexOf(2) + 1);
//     three.push(arr[i].indexOf(3) + 1);
//     four.push(arr[i].indexOf(4) + 1);
//   }

//   let sum = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = 0; j < newArr[i].length; i++) {
//       if (newArr[i][j] > newArr[i + 1][j]) sum++;
//     }
//   }
//   if (sum === arr.length) answer++;

//   return answer;
// }

function solution(arr) {
  let answer = 0;
  let m = arr.length; // 테스트 횟수 (3)
  let n = arr[0].length; // 학생 수 (4)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ]),
);
