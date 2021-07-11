function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  const TC = input.shift();
  const arr = input.map((str) => {
    return str.split(' ');
  });
  let date = [];
  let person = [];

  for (let i = 0; i < arr.length; i++) {
    date.push(arr[i][3] + arr[i][2].padStart(2, 0) + arr[i][1].padStart(2, 0));
    person.push(arr[i][0]);
  }
  let max = Math.max(...date);
  let min = Math.min(...date);
  let maxIndex = date.indexOf(String(max));
  let minIndex = date.indexOf(String(min));
  console.log(person[maxIndex]);
  console.log(person[minIndex]);
}

solution();
