function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  function getSum(num) {
    let arr = num.toString().split('');
    let reverse = arr.reverse();
    let str = reverse.join('');
    return num + Number(str);
  }

  function getReverse(num) {
    let arr = num.toString().split('');
    let reverse = arr.reverse();
    let str = reverse.join('');
    return Number(str);
  }

  const T = input.shift();
  const N = input.map((el) => Number(el));

  for (let i = 0; i < N.length; i++) {
    let sum = getSum(N[i]);
    if (sum === getReverse(sum)) console.log('YES');
    else console.log('NO');
  }
}

solution();
