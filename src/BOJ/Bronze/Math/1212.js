// boj 1212 (120) ('/dev/stdin')
const input = require('fs').readFileSync('math/input', 'utf8').trim().split('');

const OctToBin = {
  0: '000',
  1: '001',
  2: '010',
  3: '011',
  4: '100',
  5: '101',
  6: '110',
  7: '111',
};

let out = '';
while (input.length) {
  let nextOct = input.pop();
  out = OctToBin[nextOct] + out;
}

console.log(out.substr(out.indexOf('1'))); // 처음 나오는 1부터
