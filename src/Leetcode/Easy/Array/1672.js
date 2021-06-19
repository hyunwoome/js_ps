/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let answer = 0;
  accounts.forEach((array) => {
    let sum = array.reduce((acc, cur) => acc + cur);
    answer = Math.max(sum, answer);
  });
  return answer;
};

const accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
console.log(maximumWealth(accounts));
