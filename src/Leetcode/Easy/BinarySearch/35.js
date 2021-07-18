/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target));