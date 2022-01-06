/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   let obj = {};
//   for (const num of nums) {
//     obj[num] = obj[num] ? (obj[num] += 1) : 1;
//   }

//   for (const [key, value] of Object.entries(obj)) {
//     if (value > 1) return true;
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] === nums[i]) return true;
    }
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
