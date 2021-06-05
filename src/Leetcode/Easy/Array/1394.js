/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let obj = {};
  for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  const answer = [];
  for (const [key, value] of Object.entries(obj)) {
    if (Number(key) === value) answer.push(value);
  }
  if (!answer.length) return -1;
  else return Math.max(...answer);
};

const arr = [7, 7, 7, 7, 7, 7, 7];
console.log(findLucky(arr));
