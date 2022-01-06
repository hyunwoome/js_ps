/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let answer = [];
  for (let i = 0; i < nums1.length; i++) {
    let idx = nums2.indexOf(nums1[i]);
    let count = -1;
    for (let j = idx; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        count = nums2[j];
        break;
      }
    }
    answer.push(count);
  }
  return answer;
};

const nums1 = [2, 4];
const nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));
