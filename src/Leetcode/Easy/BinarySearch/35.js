const searchInsert = (nums, target) => {
  let start = 0; // 0
  let end = nums.length - 1; // 3
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 1
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return start;
};

const nums = [1, 3, 5, 6];
const target = 2;
console.log(searchInsert(nums, target));
