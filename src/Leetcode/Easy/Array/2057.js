/**
 * @param {number[]} nums
 * @return {*number}
 */
const smallestEqual = (nums) => {
  const equalArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) equalArr.push(i);
  }
  if (equalArr.length === 0) return -1;
  const sortArr = equalArr.sort((a, b) => a - b);
  return sortArr[0];
};

const nums = [0, 1, 2];
console.log(smallestEqual(nums))