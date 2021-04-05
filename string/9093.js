// boj 10828 (89) ('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('string/input', 'utf8').trim().split('\n');

const N = Number(input.shift());
const splitted = input.map((el) => el.split(' ').map((str) => str.split('')));

for (let i = 0; i < splitted.length; i++) {
  let result = '';
  for (let j = 0; j < splitted[i].length; j++) {
    result += splitted[i][j].reverse().join('') + ' ';
  }
  console.log(result);
}
