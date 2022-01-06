// boj 11726 (124) ('/dev/stdin')
const input = parseInt(
  require('fs').readFileSync('baekjoon/dp/input', 'utf8').trim(),
);

function fibonacci(n) {
  let arr = Array(n + 1).fill(0);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
  }
  return arr[n];
}

console.log(fibonacci(input));
