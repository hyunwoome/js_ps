function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0];
    let end = commands[i][1];
    let th = commands[i][2];

    let arr = array.slice(start - 1, end);
    let sortArr = arr.sort((a, b) => a - b);
    answer.push(sortArr[th - 1]);
  }
  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));

// 2에서 5까지 자르고 정렬 후 3번째 수
