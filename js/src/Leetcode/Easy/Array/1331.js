/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let sorting = [...arr];
  sorting.sort((a, b) => a - b);
  const set = new Set(sorting);
  const newArr = Array.from(set);
  let obj = {};
  for (let i = 0; i < newArr.length; i++) {
    obj[newArr[i]] = i + 1;
  }
  // for (let i = 0; i < arr.length; i++) {
  //   for (const [key, value] of Object.entries(obj)) {
  //     if (String(arr[i]) === key) answer.push(value);
  //   }
  // }
  // arr = arr.map((item) => obj[item]);
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(obj[arr[i]]);
  }
  return answer;
};

const arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr));
