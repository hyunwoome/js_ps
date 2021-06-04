/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  return nums.sort((a, b) => (obj[a] === obj[b] ? b - a : obj[a] - obj[b]));
};

const nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));
