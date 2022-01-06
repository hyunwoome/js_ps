/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let answer = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    answer += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  return answer + duration;
};

const timeSeries = [1, 4];
const duration = 2;
console.log(findPoisonedDuration(timeSeries, duration));

// 독 지속시간 = [t, t + duration - 1]
// 끝나기 전에 공격하면 지속시간이 리셋됨
