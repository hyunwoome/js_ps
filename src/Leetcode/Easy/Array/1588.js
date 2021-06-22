/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumOddLengthSubarrays = function (arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     let odd = 0;
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       odd++;
//       sum += arr[j];
//       if (odd % 2) answer.push(sum);
//     }
//   }
//   return answer.reduce((acc, cur) => acc + cur);
// };

var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const total = i * (len - i) + (len - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
};

const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
