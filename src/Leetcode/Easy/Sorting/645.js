/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let dup = -1;
  let missing = -1;
  for (let i = 1; i <= nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) count++;
    }
    if (count === 2) dup = i;
    else if (count === 0) missing = i;
  }
  return [dup, missing];
};

const nums = [1, 1];
console.log(findErrorNums(nums));
