function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0];
    let end = commands[i][1];
    let th = commands[i][2];

    let newArr = array.slice(start - 1, end);
    let sortableArr = newArr.sort((a, b) => a - b);
    answer.push(sortableArr[th - 1]);
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
