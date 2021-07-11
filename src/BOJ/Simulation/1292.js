const input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .trim();

const [A, B] = input.split(' ').map((el) => {
  return Number(el);
});

let arr = [];

for (let i = 1; i <= 1000; i++) {
  let num = i;
  while (num !== 0) {
    arr.push(i.toString());
    num--;
  }
}

let cutArr = arr.slice(A - 1, B);
console.log(cutArr.reduce((acc, cur) => Number(acc) + Number(cur)));
