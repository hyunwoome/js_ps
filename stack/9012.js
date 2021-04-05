// boj 9012 (90) ('/dev/stdin')
const fs = require('fs');
const input = fs.readFileSync('stack/input', 'utf8').trim().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let temp = input[i];
  while (temp.indexOf('()') >= 0) {
    temp = temp.replace('()', '');
  }
  if (temp === '') {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
