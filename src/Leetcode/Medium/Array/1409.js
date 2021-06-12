/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let answer = [];
  let P = [];

  // Permutation
  for (let i = 1; i <= m; i++) {
    P.push(i);
  }

  // query loop
  for (let i = 0; i < queries.length; i++) {
    let index = P.indexOf(queries[i]); // 2, 0, 1, 0
    answer.push(index); // 2
    P.unshift(Number(P.splice(index, 1).join('')));
  }
  return answer;
};

const queries = [3, 1, 2, 1];
const m = 5;
console.log(processQueries(queries, m));
