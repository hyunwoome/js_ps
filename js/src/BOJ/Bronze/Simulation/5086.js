const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .split('\n')
  .map((el) => {
    return el.split(' ');
  });

for (let i = 0; i < input.length; i++) {
  let one = input[i][0];
  let two = input[i][1];
  if (input[i][0] === '0' && input[i][1] === '0') {
    break;
  } else {
    if (Number(two) % Number(one) === 0) {
      console.log('factor');
    } else if (Number(one) % Number(two) === 0) {
      console.log('multiple');
    } else {
      console.log('neither');
    }
  }
}
