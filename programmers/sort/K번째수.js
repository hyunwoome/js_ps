function solution(array, commands) {
  var answer = [];
  for (let n = 0; n < commands.length; n++) {
    let i = commands[n][0] - 1;
    let j = commands[n][1];
    let k = commands[n][2] - 1;
    answer.push(array.slice(i, j).sort((a, b) => a - b)[k]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);

// i = 2, j = 5, j =3

// 1. i부터 j까지 자르기 (1부터)
// 2. 오름차순
// 3. k번째 숫자 배열에 푸쉬
