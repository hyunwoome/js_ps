/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  const len = nums.length;
  let hashTable = {};
  for (let i = 0; i < len; i++) {
    hashTable[nums[i]] = i;
  }

  for (let i = 0; i < len; i++) {
    let complement = target - nums[i];
    let found = hashTable[complement];
    if (found !== undefined && found != i) return [i, found];
  }
  return [0, 0];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
