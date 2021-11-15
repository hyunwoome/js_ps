const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  return nums[low] == target ? low : -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));
