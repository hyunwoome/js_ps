/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let monday = 1;
  let week = 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer += week;
    week++;

    if (i % 7 === 0) {
      monday += 1;
      week = monday;
    }
  }

  return answer;
};

const n = 4;
console.log(totalMoney(n));
