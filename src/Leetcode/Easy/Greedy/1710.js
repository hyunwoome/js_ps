/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let sortingArr = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let answer = 0;
  for (let i = 0; i < sortingArr.length; i++) {
    if (sortingArr[i][0] <= truckSize) {
      answer += sortingArr[i][0] * sortingArr[i][1];
      truckSize -= sortingArr[i][0];
    } else {
      answer += sortingArr[i][1] * truckSize;
      truckSize -= truckSize;
      if (truckSize === 0) break;
    }
  }
  return answer;
};

const boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1],
];
const truckSize = 4;
// [박스의 개수, 한 박스당 유닛의 개수]
console.log(maximumUnits(boxTypes, truckSize));
