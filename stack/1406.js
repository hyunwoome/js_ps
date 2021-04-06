// boj 1406 (92) ('/dev/stdin')

const input = require('fs').readFileSync('stack/input', 'utf8').split('\n');

let stackA = input.shift(); // abcd
let stackB = '';
const N = input.shift();

for (let i = 0; i < N; i++) {
  const command = input[i];
  if (command[0] === 'L' && stackA.length > 0) {
    stackB = stackA.slice(-1) + stackB; // d
    stackA = stackA.slice(0, -1); // abc
  } else if (command[0] === 'D' && stackB.length > 0) {
    stackA = stackA + stackB.slice(0, 1);
    stackB = stackB.slice(1);
  } else if (command[0] === 'B' && stackA.length > 0) {
    stackA = stackA.slice(0, -1);
  } else if (command[0] === 'P') {
    stackA += command[2];
  }
}

console.log(stackA + stackB);
