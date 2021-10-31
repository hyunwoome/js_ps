/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function(arr, k) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1
  }
  const tmp = [];
  for (const i in obj) {
    if (obj[i] === 1) tmp.push(i);
  }
  return tmp[k - 1] ? tmp[k - 1] : '';
};

const arr = ["aaa","aa","a"]
const k =1;
console.log(kthDistinct(arr, k));