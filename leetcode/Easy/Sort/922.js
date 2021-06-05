/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const even = [];
  const odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) even.push(nums[i]);
    else odd.push(nums[i]);
  }
  const answer = [];
  if (even.length >= odd.length) {
    for (let i = 0; i < even.length; i++) {
      answer.push(even[i]);
      answer.push(odd[i]);
    }
  } else {
    for (let i = 0; i < odd.length; i++) {
      answer.push(even[i]);
      answer.push(odd[i]);
    }
  }
  return answer;
};

const nums = [2, 3];
console.log(sortArrayByParityII(nums));
