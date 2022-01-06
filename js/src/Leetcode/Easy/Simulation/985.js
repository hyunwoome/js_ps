/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let answer = [];

  function sum(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) answer += arr[i];
    }
    return answer;
  }

  for (let i = 0; i < queries.length; i++) {
    nums[queries[i][1]] = nums[queries[i][1]] + queries[i][0];
    answer.push(sum(nums));
  }
  return answer;
};

const nums = [1, 2, 3, 4];
const queries = [
  [1, 0],
  [-3, 1],
  [-4, 0],
  [2, 3],
];
console.log(sumEvenAfterQueries(nums, queries));
