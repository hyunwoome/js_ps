/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let obj = {};
  let result = [];
  for (const num of nums1) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }

  for (let i of nums2) {
    if (obj[i]) {
      obj[i]--;
      result.push(i);
    }
  }
  return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2));
