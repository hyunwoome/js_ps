const input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map((el) => {
    return Number(el);
  });

let [A, P] = input;
let arr = [A];
let count = 1000000;

while (count !== 0) {
  let str = A.toString().split('');
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i] ** P);
  }
  A = sum;
  arr.push(A);
  count--;
}

let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
}

let answer = 0;
for (const key in obj) {
  if (obj[key] === 1) answer++;
}
console.log(answer);
