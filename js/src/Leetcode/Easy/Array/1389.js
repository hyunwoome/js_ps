/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  return nums.reduce((acc, curr, idx) => {
    acc.splice(index[idx], 0, curr);
    return acc;
  }, []);
};

const nums = [1, 2, 3, 4, 0];
const index = [0, 1, 2, 3, 0];
console.log(createTargetArray(nums, index));
