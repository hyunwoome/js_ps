/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const divideArray = Math.ceil(nums.length / 2);
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }
  for (const [key, value] of Object.entries(map)) {
    if (divideArray <= value) return Number(key);
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
