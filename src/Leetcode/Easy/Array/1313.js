/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (!(i % 2)) {
      while (nums[i]) {
        answer.push(nums[i + 1]);
        nums[i]--;
      }
    }
  }
  return answer;
};

const nums = [1, 1, 2, 3];
console.log(decompressRLElist(nums));
