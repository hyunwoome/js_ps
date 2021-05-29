function solution(land) {
  let answer = 0;
  let n = land.length;

  // [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
  let dp = Array(n)
    .fill(0)
    .map(() => Array(4).fill(0));

  // [ [ 1, 2, 3, 5 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]
  for (let i = 0; i < land[0].length; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);
      }
    }
  }
  for (let j = 0; j < 4; j++) {
    answer = Math.max(answer, dp[land.length - 1][j]);
  }
  return answer;
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];
console.log(solution(land));
