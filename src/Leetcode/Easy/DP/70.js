/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let answer = 0;
  let dy = Array(n + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
};

const n = 7;
console.log(climbStairs(n));
