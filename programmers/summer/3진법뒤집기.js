function solution(n) {
  let answer = 0;
  let reminder = [];
  while (n > 0) {
    reminder.push(n % 3);
    n = parseInt(n / 3);
  }
  return parseInt(reminder.map((num) => Number(num)).join(''), 3);
}

// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
// }

console.log(solution(45));
