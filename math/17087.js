// boj 17087 (118) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split('\n');
const splitted = input.map((el) => el.split(' '));
const NS = splitted.shift();

const N = Number(NS.shift()); // 3
const S = Number(NS.shift()); // 3
const sisterArr = splitted[0].map((el) => Number(el.split(' '))); // [1, 7, 11]

const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const distance = sisterArr.map((el) => Math.abs(S - el)); // [2, 4, 8]
let answer = distance[0]; // 2
for (let i = 1; i < N; i++) {
  // gcd(2, [2, 4, 8]) => 순차적으로 gcd를 통해 세 수의 최대공약수 추출
  answer = gcd(answer, distance[i]);
}
console.log(answer);
