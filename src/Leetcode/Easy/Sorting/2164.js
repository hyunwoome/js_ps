/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortEvenOdd = function (nums) {
  // 짝수 인덱스에는 오름차순
  // 홀수 인덱스에는 내림차순

  const evenList = [];
  const oddList = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenList.push(nums[i])
    } else {
      oddList.push(nums[i])
    }
  }

  evenList.sort((a, b) => a - b);
  oddList.sort((a, b) => b - a);

  for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
    if (evenList[i] !== undefined) { result.push(evenList[i]) }
    if (oddList[i] !== undefined) { result.push(oddList[i]) }
  }

  return result;
};

const nums = [5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21]
console.log(sortEvenOdd(nums));