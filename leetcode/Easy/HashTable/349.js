/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const setNums1 = new Set(nums1);
  const setNums2 = new Set(nums2);
  const arrNums1 = Array.from(setNums1);
  const arrNums2 = Array.from(setNums2);
  const answer = [];
  for (const number of arrNums1) {
    if (arrNums2.includes(number)) answer.push(number);
  }
  return answer;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
console.log(intersection(nums1, nums2));
