/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let tmp = [];
  for (let key in obj) {
    tmp.push(obj[key]);
  }
  let tmpArr = [];
  for (let i = 0; i < tmp.length; i++) {
    if (tmpArr.indexOf(tmp[i]) !== -1) {
      return false;
    }
    tmpArr.push(tmp[i]);
  }
  return true;
};

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
