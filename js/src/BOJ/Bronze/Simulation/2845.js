const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((el) => {
    return el.split(' ');
  });

const sh = input.shift();
const person = sh[0] * sh[1];
let answer = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    answer.push(input[0][j] - person);
  }
}

let a = answer.join(' ');
console.log(a);

// let [n1, n2, ...arr] = require('fs')
//   .readFileSync('src/baekjoon/implement/input')
//   .toString()
//   .trim()
//   .split(/\s/);
// let people = Number(n1) * Number(n2);
// let ans = [];
// let a = '';
// for (let i = 0; i < arr.length; i++) {
//   ans.push(arr[i] - people);
// }
// a = ans.join(' ');

// console.log(a);
