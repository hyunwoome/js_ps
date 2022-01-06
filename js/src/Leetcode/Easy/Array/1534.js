/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// var countGoodTriplets = function (arr, a, b, c) {
//   let answer = [];
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         let tmp = [];
//         if (
//           Math.abs(arr[i] - arr[j]) <= a &&
//           Math.abs(arr[j] - arr[k]) <= b &&
//           Math.abs(arr[i] - arr[k]) <= c
//         ) {
//           tmp.push(arr[i]);
//           tmp.push(arr[j]);
//           tmp.push(arr[k]);
//           answer.push(tmp);
//         }
//       }
//     }
//   }
//   return answer.length;
// };

var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};

const arr = [3, 0, 1, 1, 9, 7];
const a = 7;
const b = 2;
const c = 3;
console.log(countGoodTriplets(arr, a, b, c));
