/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sortingNumber = nums.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < sortingNumber.length; i++) {
    if (!(i % 2)) answer += sortingNumber[i];
  }
  return answer;
};

const nums = [6, 2, 6, 5, 1, 2];
console.log(arrayPairSum(nums));
