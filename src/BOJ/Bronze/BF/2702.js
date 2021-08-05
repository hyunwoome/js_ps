function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/bf/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');
  const T = Number(input.shift());
  const arr = input.map((el) => {
    return el.split(' ').map((el) => {
      return +el;
    });
  });
  // 최소공배수 , 최대공약수
  const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a % b);
  };

  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i][0];
    let num2 = arr[i][1];
    let common = gcd(num1, num2);
    console.log(`${(num1 * num2) / common} ${common}`);
  }
}
solution();
